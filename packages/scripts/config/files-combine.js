/**
 * 由于配置会被应用在 Web 环境，故而代码中不能包含 Node 环境特有的依赖和代码
 */

const GLOBAL_COMPONENTS_CONFIG = [
    'ActionSheetConfig',
    'AlertConfig',
    'AnchorConfig',
    'AutoCompleteConfig',
    'CalendarConfig',
    'CascaderConfig',
    'ColorPickerConfig',
    'DatePickerConfig',
    'DateTimePickerConfig',
    'DescriptionsConfig',
    'DialogConfig',
    'DrawerConfig',
    'DropdownMenuConfig',
    'EmptyConfig',
    'FormConfig',
    'GuideConfig',
    'ImageConfig',
    'QRCodeConfig',
    'ImageViewerConfig',
    'InputConfig',
    'ListConfig',
    'MessageConfig',
    'PaginationConfig',
    'PickerConfig',
    'PopconfirmConfig',
    'PullDownRefreshConfig',
    'RateConfig',
    'SelectConfig',
    'StepsConfig',
    'TabBarConfig',
    'TagConfig',
    'TableConfig',
    'TimePickerConfig',
    'TreeConfig',
    'TreeSelectConfig',
    'TransferConfig',
    'TypographyConfig',
    'UploadConfig',
    'UploadConfigDragger',
    'UploadConfigFile',
    'UploadConfigFileList',
    'UploadConfigImage',
    'UploadConfigProgress',
].sort((a, b) => a.localeCompare(b));

const MESSAGE_LIST = [
    'Message',
    'MessageOptions',
    '$Message',
    '$Message.info',
    '$Message.error',
    '$Message.warning',
    '$Message.success',
    '$Message.loading',
    '$Message.question',
    '$Message.close',
    '$Message.closeAll',
    '$Message.config',
];
const NOTIFICATION_LIST = [
    'Notification',
    'NotificationOptions',
    '$Notification',
    '$Notification.info',
    '$Notification.warning',
    '$Notification.error',
    '$Notification.success',
    '$Notification.close',
    '$Notification.closeAll',
    '$Notification.config',
];
const TABLE_LIST = [
    'Table',
    'TableCol',
    'BaseTable',
    'BaseTableCol',
    'PrimaryTable',
    'PrimaryTableCol',
    'EnhancedTable',
    'EnhancedTableCol',
    'TableRowState',
    'TableColumnFilter',
    'TableColumnController',
    'TableEditableCellConfig',
    'TableTreeConfig',
];
const GLOBAL_CONFIG_PROVIDER = [
    'ConfigProvider',
    'GlobalConfigProvider',
].concat(GLOBAL_COMPONENTS_CONFIG);
const MOBILE_FRAMES = ['Vue(Mobile)', 'React(Mobile)', 'Miniprogram'];

// 输出 API 文档时，哪些需要文件需要合并输出，数据内容为组件/插件名称
const COMPONENT_API_MD_MAP = {
    Avatar: ['Avatar', 'AvatarGroup'],
    Checkbox: ['Checkbox', 'CheckboxGroup'],
    Cell: ['Cell', 'CellGroup'],
    Radio: ['Radio', 'RadioGroup'],
    Anchor: ['Anchor', 'AnchorItem', 'AnchorTarget'],
    Descriptions: ['Descriptions', 'DescriptionsItem'],
    Tabs: ['Tabs', 'TabPanel'],
    TabBar: ['TabBar', 'TabBarItem'],
    Pagination: ['Pagination', 'PaginationMini'],
    Form: ['Form', 'FormItem', 'FormList', 'FormRule', 'FormErrorMessage'],
    Breadcrumb: ['Breadcrumb', 'BreadcrumbItem'],
    Message: MESSAGE_LIST,
    Notification: NOTIFICATION_LIST,
    Layout: {
        list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
        // includes 以下框架满足此组件父子关系，其他的框架则不使用此关系
        // includes 以下框架将 'Layout', 'Header', 'Aside', 'Content', 'Footer' 等组件的 API 文档，合并输出到目录 layout
        // 也可以使用 excludes 用于排除某些框架使用该父子组件关系
        includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
    Col: {
        list: ['Col', 'Row'],
        includes: ['Miniprogram'],
    },
    // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
    Grid: [
        {
            list: ['Grid', 'Row', 'Col'],
            includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
        },
    ],
    Icon: ['Icon', 'IconSVG', 'IconFont'],
    Select: ['Select', 'Option', 'OptionGroup', 'TScroll'],
    Tag: ['Tag', 'CheckTag', 'CheckTagGroup'],
    Collapse: ['Collapse', 'CollapsePanel'],
    Dropdown: {
        list: ['Dropdown', 'DropdownItem'],
        includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
    DropdownMenu: ['DropdownMenu', 'DropdownItem'],
    Dialog: [
        'DialogCard',
        'Dialog',
        'DialogOptions',
        'DialogInstance',
        '$Dialog',
        '$Dialog.confirm',
        '$Dialog.alert',
    ],
    Drawer: ['Drawer', 'DrawerOptions', 'DrawerInstance', '$Drawer'],
    // 只有文档需要 TScroll，类型定义不需要
    Table: TABLE_LIST.concat('TScroll'),
    Tree: ['Tree', 'TreeNodeState', 'TreeNodeModel', 'TScroll'],
    Breadcrumb: ['Breadcrumb', 'BreadcrumbItem'],
    Steps: ['Steps', 'StepItem'],
    Calendar: ['Calendar', 'CalendarController', 'CalendarCell'],
    Menu: ['Menu', 'HeadMenu', 'Submenu', 'MenuItem', 'MenuGroup'],
    Loading: ['Loading', '$Loading'],
    Upload: {
        list: ['Upload', 'UploadFile'],
        excludes: ['Miniprogram'],
    },
    List: ['List', 'ListItem', 'ListItemMeta'],
    Picker: {
        list: ['Picker', 'PickerItem'],
        includes: ['Miniprogram'],
    },
    TimePicker: [
        'TimePicker',
        'TimeRangePicker',
        'TimePickerPanel',
        'TimeRangePickerPanel',
    ],
    DateTimePicker: ['DateTimePicker'],
    DatePicker: [
        'DatePicker',
        'DateRangePicker',
        'DatePickerPanel',
        'DateRangePickerPanel',
    ],
    Swiper: {
        list: ['Swiper', 'SwiperItem', 'SwiperNavigation'],
    },
    StickyTool: ['StickyTool', 'StickyItem'],
    ConfigProvider: GLOBAL_CONFIG_PROVIDER,
    RangeInput: ['RangeInput', 'RangeInputPopup'],
    Input: ['Input', 'InputGroup'],
    Watermark: ['Watermark', 'WatermarkText', 'WatermarkImage'],
    Timeline: ['Timeline', 'TimelineItem'],
    Guide: ['Guide', 'GuideStep'],
    Tooltip: ['Tooltip', 'TooltipLite'],
    SideBar: ['SideBar', 'SideBarItem'],
    Indexes: {
        list: ['Indexes', 'IndexesAnchor'],
    },
    Popup: ['Popup', '$Popup'],
    Typography: [
        'Typography',
        'Text',
        'Title',
        'Paragraph',
        'TypographyEllipsis',
        'TypographyCopyable',
    ],
    Toast: {
        list: ['Toast', 'ToastOptions'],
        includes: ['Vue(Mobile)', 'React(Mobile)'],
    },
    // 高阶组件
    Chat: [
        'Chat',
        'ChatLoading',
        'ChatItem',
        'ChatContent',
        'ChatAction',
        'ChatInput',
        'ChatSender',
        'ChatReasoning',
    ],
    ColorPicker: {
        list: ['ColorPicker', 'ColorPickerPanel'],
        includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
};

// H5 特殊组件
const MOBILE_COMPONENT_API_MD_MAP = {
    Layout: {
        list: ['Layout', 'Row', 'Col'],
    },
    Grid: {
        list: ['Grid', 'GridItem'],
    },
    List: ['List'],
};

// 小程序 特殊组件
const MINIPROGRAM_COMPONENT_API_MD_MAP = {
    Swiper: {
        list: ['Swiper', 'SwiperNav'],
        includes: ['Miniprogram'],
    },
};

// 输出 TS 类型文件时，哪些需要文件需要合并输出，数据内容为组件/插件名称
const TYPES_COMBINE_MAP = {
    Avatar: {
        list: ['Avatar', 'AvatarGroup'],
        excludes: ['Miniprogram'],
    },
    Checkbox: {
        list: ['Checkbox', 'CheckboxGroup'],
        excludes: ['Miniprogram'],
    },
    Cell: {
        list: ['Cell', 'CellGroup'],
        excludes: ['Miniprogram'],
    },
    Radio: {
        list: ['Radio', 'RadioGroup'],
        excludes: ['Miniprogram'],
    },
    Message: {
        list: MESSAGE_LIST,
    },
    Notification: {
        list: NOTIFICATION_LIST,
    },
    Form: {
        list: ['Form', 'FormItem', 'FormList', 'FormRule', 'FormErrorMessage'],
        excludes: ['Miniprogram'],
    },
    Select: {
        list: ['Select', 'Option', 'OptionGroup'],
    },
    Tabs: {
        list: ['Tabs', 'TabPanel'],
        excludes: ['Miniprogram'],
    },
    TabBar: {
        list: ['TabBar', 'TabBarItem'],
        excludes: ['Miniprogram'],
    },
    Pagination: {
        list: ['Pagination', 'PaginationMini'],
    },
    Tag: {
        list: ['Tag', 'CheckTag', 'CheckTagGroup'],
        excludes: ['Miniprogram'],
    },
    Collapse: {
        list: ['Collapse', 'CollapsePanel'],
        excludes: ['Miniprogram'],
    },
    // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
    Grid: [
        {
            list: ['Grid', 'Row', 'Col'],
            includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
        },
    ],
    // Web 侧是 Layout + Header + Aside + Content + Footer，移动端 Layout + Row + Col
    Layout: {
        list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
        // includes 以下框架满足此组件父子关系
        // includes 以下框架将 'Layout', 'Header', 'Aside', 'Content', 'Footer' 等组件的 API 文档，合并输出到目录 layout
        includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
    Dropdown: {
        list: ['Dropdown', 'DropdownItem'],
        includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
    DropdownMenu: {
        list: ['DropdownMenu', 'DropdownItem'],
        excludes: ['Miniprogram'],
    },
    Dialog: {
        list: [
            'DialogCard',
            'Dialog',
            'DialogOptions',
            'DialogInstance',
            '$Dialog',
            '$Dialog.confirm',
            '$Dialog.alert',
        ],
    },
    Drawer: {
        list: ['Drawer', 'DrawerOptions', 'DrawerInstance', '$Drawer'],
    },
    Tree: {
        list: ['Tree', 'TreeNodeState', 'TreeNodeModel'],
    },
    Breadcrumb: {
        list: ['Breadcrumb', 'BreadcrumbItem'],
    },
    Steps: {
        list: ['Steps', 'StepItem'],
        excludes: ['Miniprogram'],
    },
    Calendar: {
        list: ['Calendar', 'CalendarController', 'CalendarCell'],
    },
    Descriptions: {
        list: ['Descriptions', 'DescriptionsItem'],
    },
    Menu: {
        list: ['Menu', 'HeadMenu', 'Submenu', 'MenuItem', 'MenuGroup'],
    },
    Loading: {
        list: ['Loading', '$Loading'],
    },
    Upload: {
        list: ['Upload', 'UploadFile'],
        excludes: ['Miniprogram'],
    },
    List: {
        list: ['List', 'ListItem', 'ListItemMeta'],
    },
    Picker: {
        list: ['Picker', 'PickerItem'],
        excludes: ['Miniprogram'],
    },
    TimePicker: {
        list: [
            'TimePicker',
            'TimeRangePicker',
            'TimePickerPanel',
            'TimeRangePickerPanel',
        ],
    },
    DateTimePicker: {
        list: ['DateTimePicker'],
    },
    DatePicker: {
        list: [
            'DatePicker',
            'DateRangePicker',
            'DatePickerPanel',
            'DateRangePickerPanel',
        ],
    },
    Swiper: {
        list: ['Swiper', 'SwiperItem', 'SwiperNavigation'],
    },
    Table: {
        list: TABLE_LIST,
    },
    Icon: {
        list: ['Icon', 'IconFont', 'IconSVG'],
    },
    Anchor: {
        list: ['AnchorTarget', 'AnchorItem'],
    },
    StickyTool: {
        list: ['StickyTool', 'StickyItem'],
    },
    ConfigProvider: {
        list: GLOBAL_CONFIG_PROVIDER,
    },
    RangeInput: {
        list: ['RangeInput', 'RangeInputPopup'],
    },
    Input: {
        list: ['Input', 'InputGroup'],
    },
    Watermark: {
        list: ['Watermark', 'WatermarkText', 'WatermarkImage'],
    },
    Timeline: {
        list: ['Timeline', 'TimelineItem'],
    },
    Guide: {
        list: ['Guide', 'GuideStep'],
    },
    Tooltip: {
        list: ['Tooltip', 'TooltipLite'],
    },
    SideBar: {
        list: ['SideBar', 'SideBarItem'],
        excludes: ['Miniprogram'],
    },
    Indexes: {
        list: ['Indexes', 'IndexesAnchor'],
        excludes: ['Miniprogram'],
    },
    Typography: {
        list: [
            'Typography',
            'Text',
            'Title',
            'Paragraph',
            'TypographyEllipsis',
            'TypographyCopyable',
        ],
    },
    Toast: {
        list: ['Toast', 'ToastOptions'],
        includes: ['Vue(Mobile)', 'React(Mobile)'],
    },
    // 高阶组件
    Chat: [
        'Chat',
        'ChatLoading',
        'ChatItem',
        'ChatContent',
        'ChatAction',
        'ChatInput',
        'ChatSender',
        'ChatReasoning',
    ],
};

const MOBILE_TYPES_COMBINE_MAP = {
    Layout: {
        list: ['Layout', 'Row', 'Col'],
        excludes: ['Miniprogram'],
    },
    Grid: {
        list: ['Grid', 'GridItem'],
        excludes: ['Miniprogram'],
    },
    List: ['List'],
};

const MINIPROGRAM_TYPES_COMBINE_MAP = {
    Swiper: {
        list: ['Swiper', 'SwiperNav'],
        excludes: ['Miniprogram'],
    },
    Form: {
        list: ['Form', 'FormList', 'FormRule', 'FormErrorMessage'],
        includes: ['Miniprogram'],
    },
};

exports.GLOBAL_COMPONENTS_CONFIG = GLOBAL_COMPONENTS_CONFIG;
exports.COMPONENT_API_MD_MAP = COMPONENT_API_MD_MAP;
exports.TYPES_COMBINE_MAP = TYPES_COMBINE_MAP;

exports.default = {
    COMPONENT_API_MD_MAP,
    MOBILE_COMPONENT_API_MD_MAP,
    TYPES_COMBINE_MAP,
    MOBILE_TYPES_COMBINE_MAP,
    GLOBAL_COMPONENTS_CONFIG,
    MINIPROGRAM_COMPONENT_API_MD_MAP,
    MINIPROGRAM_TYPES_COMBINE_MAP,
    MOBILE_FRAMES,
};

module.exports = {
    COMPONENT_API_MD_MAP,
    MOBILE_COMPONENT_API_MD_MAP,
    TYPES_COMBINE_MAP,
    MOBILE_TYPES_COMBINE_MAP,
    GLOBAL_COMPONENTS_CONFIG,
    MINIPROGRAM_COMPONENT_API_MD_MAP,
    MINIPROGRAM_TYPES_COMBINE_MAP,
    MOBILE_FRAMES,
};

Object.defineProperty(exports, '__esModule', { value: true });
