import Vue from 'vue'
import * as filter from '~/utils/filter' //自定义过滤器

Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器
