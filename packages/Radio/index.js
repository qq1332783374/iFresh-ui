// 导入组件，组件必须声明 name
import radio from './src'
import radioGroup from './src/group'

// 为组件提供 install 安装方法，供按需引入
radio.install = function(Vue) {
    Vue.component(radio.name, radio)
}
radioGroup.install = function(Vue) {
    Vue.component(radio.name, radio)
}

// 导出组件
export var Radio = radio;
export var RadioGroup = radioGroup;