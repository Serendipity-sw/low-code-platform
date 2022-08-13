import { controlsType } from '../../../utils/controls-type'

export const menuTypeMap = {
  [controlsType.div.name]: {
    style: {
      label: '样式',
      value: 1
    },
    data: {
      label: '数据',
      value: 2
    },
    event: {
      label: '事件',
      value: 3
    }
  },
  [controlsType.richEdit.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  },
  [controlsType.img.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  },
  [controlsType.map.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  },
  [controlsType.chartLine.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  },
  [controlsType.chartColumn.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  },
  [controlsType.chartBar.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  },
  [controlsType.chartPie.name]: {
    data: {
      label: '数据',
      value: 1
    },
    event: {
      label: '事件',
      value: 2
    }
  }
}