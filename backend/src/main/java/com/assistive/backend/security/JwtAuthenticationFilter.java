package com.assistive.backend.security;



import com.assistive.backend.mapper.SysRoleMapper;
import com.assistive.backend.utils.JwtUtils;
import com.assistive.backend.vo.RoleItemVO;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final SysRoleMapper sysRoleMapper;
    private final JwtUtils jwtUtils;

    public JwtAuthenticationFilter(JwtUtils jwtUtils,SysRoleMapper sysRoleMapper) {
        this.jwtUtils = jwtUtils;
        this.sysRoleMapper = sysRoleMapper;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        // 没有 token，直接放行，后续由权限规则决定是否拦截
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);

        try {
            Long userId = jwtUtils.getUserId(token);


            List<String> roleCodes = new ArrayList<>();
            for (RoleItemVO role : sysRoleMapper.selectAllRolesByUserId(userId)){
                roleCodes.add(role.getRoleCode());
            }


            List<GrantedAuthority> authorities = new ArrayList<>();
            if (roleCodes != null){
                for (String code : roleCodes){
                    authorities.add(new SimpleGrantedAuthority("ROLE_" + code));
                }
            }
            UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(userId, null, authorities);

            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json;charset=UTF-8");
            response.getWriter().write("{\"code\":401,\"message\":\"token无效或已过期\",\"data\":null}");
            return;
        }

        filterChain.doFilter(request, response);
    }
}
