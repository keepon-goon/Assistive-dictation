package com.assistive.backend.utils;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;

public class ListUtils {

    private ListUtils(){
        throw new AssertionError("工具类不能实例化");
    }


    /**
     * 判断列表是否包含指定对象
     * 基于Object.equals()方法进行比较
     *
     * @param list  待检查的列表
     * @param target 要查找的目标对象
     * @param <T>   对象类型
     * @return 如果列表包含目标对象返回true，否则返回false
     */
    public static <T> boolean contains(List<T> list, T target) {
        if (list == null || list.isEmpty()) {
            return false;
        }
        if (target == null) {
            return containsNull(list);
        }
        return list.contains(target);
    }

    /**
     * 判断列表中是否包含null元素
     *
     * @param list 待检查的列表
     * @param <T>  对象类型
     * @return 如果列表包含null返回true，否则返回false
     */
    public static <T> boolean containsNull(List<T> list) {
        if (list == null || list.isEmpty()) {
            return false;
        }
        for (T element : list) {
            if (element == null) {
                return true;
            }
        }
        return false;
    }

    // ==================== 批量包含判断 ====================

    /**
     * 判断列表是否包含任意一个指定对象
     *
     * @param list    待检查的列表
     * @param targets 要查找的目标对象数组
     * @param <T>     对象类型
     * @return 如果列表包含任意一个目标对象返回true，否则返回false
     */
    @SafeVarargs
    public static <T> boolean containsAny(List<T> list, T... targets) {
        if (list == null || list.isEmpty() || targets == null || targets.length == 0) {
            return false;
        }
        for (T target : targets) {
            if (contains(list, target)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 判断列表是否包含所有指定对象
     *
     * @param list    待检查的列表
     * @param targets 要查找的目标对象数组
     * @param <T>     对象类型
     * @return 如果列表包含所有目标对象返回true，否则返回false
     */
    @SafeVarargs
    public static <T> boolean containsAll(List<T> list, T... targets) {
        if (list == null || list.isEmpty() || targets == null || targets.length == 0) {
            return false;
        }
        for (T target : targets) {
            if (!contains(list, target)) {
                return false;
            }
        }
        return true;
    }


    /**
     * 列表去重，保留第一个出现的元素
     * 基于Object.equals()和Object.hashCode()方法进行比较
     *
     * @param list 待去重的列表
     * @param <T>  对象类型
     * @return 去重后的新列表，保持原顺序
     */
    public static <T> List<T> deduplicate(List<T> list) {
        if (list == null || list.isEmpty()) {
            return new ArrayList<>();
        }
        return new ArrayList<>(new LinkedHashSet<>(list));
    }

}
