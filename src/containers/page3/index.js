require('./index.css');

module.exports = function() {
    require(['./index.html'], function(html) {
        document.querySelector('.page-container').innerHTML = html;
        var app, viewModel, basicDatas, events;
        basicDatas = {
            testDataTable: new u.DataTable({
                meta: {
                    name: {
                        type: 'string'
                    },
                    id: {
                        type: 'string'
                    },
                    child: {}
                }
            }),
            province: []
        };

        events = {

        };


        viewModel = u.extend({}, basicDatas, events);
        var loadData = function() {
            $.ajax({
                type: "get",
                url: "./api/page3/address.json",
                dataType: "json",
                async: true,
                success: function(res) {
                    if (res.success) {
                        console.log(viewModel.testDataTable.getRow(0));
                        document.getElementById('province')['u.Combo'].setComboData(res.data);
                    }
                }
            });
        }

        $(function() {
            app = u.createApp({
                el: '#page3',
                model: viewModel
            });

            $('#ShowCardBtn').on('click', function() {
                var md = document.getElementById('page3')['u.MDLayout'];
                md.dGo('cardForPage3');
            })
            $('#showMainPanel').on('click', function() {
                var md = document.getElementById('page3')['u.MDLayout'];
                md.dGo('defultPage');
            })
            loadData();
        });

    });
}
