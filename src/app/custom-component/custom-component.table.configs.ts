export const basicTableConfig ={
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { 
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        width: '200px'
      },
      {
        name: 'details',
        header: 'Details',
        width: '200px'
      },
    ]
  };

export const parameterTableConfig = {
    id_field: 'Level',
    parent_id_field: 'parentId',
    parent_display_field: 'parameter',
    css: { 
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'parameter',
        header: 'Parameter',
        width: '200px',
      },
      {
        name: 'Type',
        header: 'Type',
        width: '200px'
      },
      {
        name: 'parameterType',
        header: 'Parameter Type',
        width: '200px'
      },
      {
        name: 'Mendate',
        header: 'Mandatory',
        width: '200px'
      },
      {
        name: 'Description',
        header: 'Description',
        width: '300px'
      }
    ]
}

export const validationTableConfig = {
    id_field: 'Level',
    parent_id_field: 'parentId',
    parent_display_field: 'parameter',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'parameter',
        header: 'Parameter',
        width: '200px'
      },
      {
        name: 'maxLength',
        header: 'Max Length',
        width: '120px'
      },
      {
        name: 'minLength',
        header: 'Min Length',
        width: '120px'
      },
      {
        name: 'pattern',
        header: 'Pattern',
        width: '400px'
      },
    ]
}

export const requestTableConfig = {
    id_field: 'Level',
    parent_id_field: 'parentId',
    parent_display_field: 'parameter',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'parameter',
        header: 'Parameter',
        width: '200px',
      },
      {
        name: 'Type',
        header: 'Type',
        width: '200px'
      },
      {
        name: 'Mendate',
        header: 'Mandatory',
        width: '200px'
      },
      {
        name: 'Description',
        header: 'Description',
        width: '200px'
      }
    ]
}

export const responseTableConfig = {
    id_field: 'Level',
    parent_id_field: 'parentId',
    parent_display_field: 'parameter',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'parameter',
        header: 'Parameter',
        width: '200px'
      },
      {
        name: 'Type',
        header: 'Type',
        width: '200px'
      },
      {
        name: 'Mendate',
        header: 'Nullable',
        width: '200px'
      }
    ]
}