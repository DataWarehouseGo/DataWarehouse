import f from"./index.c296dff2.js";import{d as h,bB as k,u as _,c as p,bJ as y,bq as C}from"./index.536c7d72.js";import{h as S}from"./index.22428b53.js";import{u as b}from"./use-message.243250a9.js";import"./dag-toolbar.ba759f66.js";import"./dag.module.c7fce5f9.js";import"./track.f1da8f9b.js";import"./toNumber.c47a71ca.js";import"./Popover.374e8a7f.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./utils.ba7f47bf.js";import"./format-length.a0cbed4d.js";import"./resolve-slot.12a336d2.js";import"./use-compitable.7f10f89e.js";import"./next-frame-once.e5ee25e8.js";import"./debounce.8aa2d6ba.js";import"./lodash.bce5b897.js";import"./index.990798b2.js";import"./dag-context-menu.eb822e2c.js";import"./index.d67d1729.js";import"./service.4ca56d82.js";import"./common.cc1e0c6c.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./EditOutlined.57b65af3.js";import"./index.9c0cbe29.js";import"./Button.9dd5ee3c.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./gForce.6c6bb633.js";import"./use-text-copy.f14b4440.js";import"./dag-node-status.53d6d801.js";import"./Icon.36d6d904.js";import"./Spin.5bd91cff.js";import"./index.7a579f81.js";import"./Tooltip.2dc588a0.js";import"./task-node.c5365e5f.js";import"./dag-startup-param.aaefe1fe.js";import"./index.393f36dd.js";import"./index.5b6233e7.js";import"./variables-view.1a3f3d07.js";import"./index.c7ac6f91.js";import"./CopyOutlined.6f3bd1e0.js";import"./SearchOutlined.b0711796.js";import"./DownloadOutlined.e576ca2a.js";import"./SyncOutlined.60307d76.js";import"./DeleteOutlined.0c0bc8fc.js";import"./FullscreenOutlined.764420ff.js";import"./InfoCircleOutlined.83e0afb2.js";import"./text.9c0a1613.js";import"./Selection.2ed26059.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";import"./Select.eddb521d.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./dag-canvas.9f42cb29.js";import"./dag-config.e2eb20b1.js";import"./dag-sidebar.d56b42bd.js";import"./task-type.8f811883.js";import"./dag-auto-layout-modal.94fbf622.js";import"./index.4d9d5980.js";import"./index.eb38a2cf.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./Space.8c5cfc39.js";import"./get-slot.7f666ba0.js";/* empty css                 */import"./RadioButton.c57a94c4.js";import"./RadioGroup.5a44255f.js";import"./Form.b918a62f.js";import"./FormItem.67716b88.js";import"./InputNumber.1f688029.js";import"./Input.4b8b409e.js";import"./Add.4fb6bf29.js";import"./detail-modal.1cea2091.js";import"./detail.6585e533.js";import"./get-elements-by-json.eedeb8ee.js";import"./Grid.f7dd02c2.js";import"./Radio.8f1c774c.js";import"./index.ebf19dc1.js";import"./Switch.57a995f1.js";import"./Checkbox.9b98fe51.js";import"./TreeSelect.c15d3653.js";import"./ArrowUpOutlined.6047a6cd.js";import"./index.5342f370.js";import"./index.b34b4239.js";import"./index.ea5b005f.js";import"./index.ef1910ce.js";import"./index.40581ef3.js";import"./Ellipsis.b0d6a040.js";import"./index.2c10ded7.js";import"./index.5b11598a.js";import"./ProfileOutlined.57e6de9b.js";import"./version-modal.80356484.js";import"./use-modal.50ac9826.js";import"./index.67996f97.js";import"./ExclamationCircleOutlined.61140060.js";import"./Popconfirm.f3bbced5.js";import"./DataTable.4d10e01f.js";import"./ArrowDown.e4a7e0d5.js";import"./Dropdown.8c20a4f5.js";import"./ChevronRight.ffdb37b1.js";import"./use-keyboard.3c40c702.js";import"./Forward.5223a2c3.js";import"./dag-save-modal.646c304f.js";import"./index.89780321.js";import"./ButtonGroup.a882bf80.js";import"./start-modal.5f428608.js";import"./PlusCircleOutlined.da9dc67f.js";import"./DatePicker.9d2907ba.js";import"./index.940c2a82.js";import"./throttle.25c0ae05.js";const J="_container_w4ea7_17",N="_dark_w4ea7_26",w="_light_w4ea7_31",r={container:J,dark:N,light:w},Bo=h({name:"WorkflowDefinitionCreate",setup(){const m=k(),e=b(),{t:n}=_(),s=y(),a=C(),o=Number(s.params.projectCode),c=({taskDefinitions:u,saveForm:t,connects:d,locations:l})=>{const g=t.globalParams.map(i=>({prop:i.key,value:i.value,direct:"IN",type:"VARCHAR"}));S({taskDefinitionJson:JSON.stringify(u),taskRelationJson:JSON.stringify(d),locations:JSON.stringify(l),name:t.name,tenantCode:t.tenantCode,executionType:t.executionType,description:t.description,globalParams:JSON.stringify(g),timeout:t.timeoutFlag?t.timeout:0},o).then(i=>{e.success(n("project.dag.success")),a.push({path:`/projects/${o}/workflow-definition`})})};return()=>p("div",{class:[r.container,m.darkTheme?r.dark:r.light]},[p(f,{projectCode:o,onSave:c},null)])}});export{Bo as default};
