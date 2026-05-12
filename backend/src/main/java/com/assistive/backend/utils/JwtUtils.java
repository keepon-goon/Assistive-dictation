package com.assistive.backend.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String SECRET;

    @Value("${jwt.expire-time}")
    private Long EXPIRE_TIME;

    /**
     * 生成 token
     */
    public String generateToken(Long userId, String username) {
        Date expireDate = new Date(System.currentTimeMillis() + EXPIRE_TIME);

        return JWT.create()
                .withClaim("userId", userId)
                .withClaim("username", username)
                .withExpiresAt(expireDate)
                .sign(Algorithm.HMAC256(SECRET));
    }

    /**
     * 校验 token 是否有效
     */
    public boolean verifyToken(String token) {
        try {
            JWT.require(Algorithm.HMAC256(SECRET))
                    .build()
                    .verify(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 解析 token
     */
    public DecodedJWT parseToken(String token) {
        return JWT.require(Algorithm.HMAC256(SECRET))
                .build()
                .verify(token);
    }

    /**
     * 从 token 里取 userId
     */
    public Long getUserId(String token) {
        DecodedJWT decodedJWT = parseToken(token);
        return decodedJWT.getClaim("userId").asLong();
    }

    /**
     * 从 token 里取 username
     */
    public String getUsername(String token) {
        DecodedJWT decodedJWT = parseToken(token);
        return decodedJWT.getClaim("username").asString();
    }

}
