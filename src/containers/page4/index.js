require('./index.css');

module.exports = function() {
    require(['./index.html'], function(html) {
        document.querySelector('.page-container').innerHTML = html;

        var viewModel = {
            treeSetting: {
                view: {
                    showLine: false,
                    selectedMulti: false
                },

                check: {
                    enable: true,
                    chkStyle: "checkbox",
                    chkboxType: {
                        "Y": "p",
                        "N": "s"
                    }
                },

                edit: {
                    enable: true,
                    editNameSelectAll: true,
                    showRemoveBtn: true,
                    showRenameBtn: true,
		                removeTitle: "删除节点",
                    renameTitle: "编辑节点名称"
                    },

                callback: {
                    onClick: function(e, id, node) {
                        // alert(id)
                        // alert(node)
                        var rightInfo = node.name + '被选中';
                        u.showMessage({
                            msg: rightInfo,
                            position: "top"
                        })
                    }
                }
            },
            dataTable: new u.DataTable({
                meta: {
                    'id': {
                        'value': ""
                    },
                    'pid': {
                        'value': ""
                    },
                    'title': {
                        'value': ""
                    }
                }
            })
        };
        var app = u.createApp({
            el: document.body,
            model: viewModel
        });
        var data = {
            "pageIndex": 1,
            "pageSize": 10,
            "rows": [{
                "status": "nrm",
                "data": {
                    "id": "01",
                    "pid": "root",
                    "title": "Parent1"
                }
            }, {
                "status": "nrm",
                "data": {
                    "id": "02",
                    "pid": "root",
                    "title": "Parent2"
                }
            }, {
                "status": "nrm",
                "data": {
                    "id": "101",
                    "pid": "01",
                    "title": "Child11"
                }
            }, {
                "status": "nrm",
                "data": {
                    "id": "102",
                    "pid": "01",
                    "title": "mChild12"
                }
            }, {
                "status": "nrm",
                "data": {
                    "id": "201",
                    "pid": "02",
                    "title": "Child21"
                }
            }]
        }
        viewModel.dataTable.setData(data);

        function ajaxDataFilter(treeId, parentNode, responseData) {
            if (responseData) {
                for (var i = 0; i < responseData.length; i++) {
                    responseData[i].name += "_filter";
                }
            }
            return responseData;
        };


    });
}
