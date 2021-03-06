import '../public/assets/style/base/fontFamly.css' //全局导入字体
import { Button, ButtonGroup } from './Button'
import { Radio, RadioGroup } from './Radio'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Select, Option } from './Select'
import { Menu, MenuItem, SubMenu } from './Menu'
import { TimeAxis, TIMEAxisItem } from './TimeAxis'
import { Form, FormItem } from './Form'
// import { Carousel, CarouselItem } from './Form'
import { Gallery, GalleryItem } from './Gallery'
import Input from './Input'
import ifNumber from './Number'
import Page from './Page'
import Icon from './Icon'
import Image from './Image'
import Card from './Card'
import Personcard from './PersonCard'
import Tag from './Tag'
import Table from './Table'
import Divider from './Divider'
import BackTop from './BackTop'
import Modal from './Modal'



// 组件列表
const components = [
    Button,
    ButtonGroup,
    Page,
    Input,
    ifNumber,
    Icon,
    Image,
    Card,
    Personcard,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Select,
    Option,
    Menu,
    MenuItem,
    SubMenu,
    TimeAxis,
    TIMEAxisItem,
    Tag,
    Table,
    Divider,
    BackTop,
    Form,
    FormItem,
    Modal,
    Gallery,
    GalleryItem
    // Carousel,
    // CarouselItem
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return
        // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    Button,
    ButtonGroup,
    Page,
    Input,
    ifNumber,
    Icon,
    Image,
    Card,
    Personcard,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Select,
    Option,
    Menu,
    MenuItem,
    SubMenu,
    TimeAxis,
    TIMEAxisItem,
    Tag,
    Table,
    Divider,
    BackTop,
    Form,
    FormItem,
    Modal,
    Gallery
    // Carousel,
    // CarouselItem
}