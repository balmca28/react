
function setSelected() {
    ($('.all_products').is(":checked") ? $('.products_checkbox').prop("checked", true) : $('.products_checkbox').prop("checked", false))
}
//Updating products
function updateProduct(product_id, label, value) {
    $.post('/listing/update-product-field', {
        _token: $('meta[name="csrf-token"]').attr('content'),
        label: label,
        value: value,
        product_id: product_id
    }, function (data) {

    });
}

function downloadProducts() {
    var products = "";
    $(".products_checkbox").each(function () {
        if ($(this).is(":checked")) {
            products = products + $(this).val() + ",";
        }
    })
    products = products.substring(0, products.length - 1);


    $.post('/listing/inventory-download-products', {
        _token: $('meta[name="csrf-token"]').attr('content'),
        products: products,
    }, function (data) {

        var downloadLink = document.createElement("a");
        var blob = new Blob(["\ufeff", data]);
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "data.csv";

        document.body.appendChild(downloadLink);
        downloadLink.click();
    });
}

function bulkAction(action) {
    $("#request_download").attr('disabled', 'disabled');
    if (action == "alot_inventory") {
        $("#request_download").removeAttr('disabled');
    }
    if (action == "delete_product") {

        var products = "";
        $(".products_checkbox").each(function () {
            if ($(this).is(":checked")) {
                products = products + $(this).val() + ",";
            }
        })
        products = products.substring(0, products.length - 1);
        if (products == "") {
            $('#bulk_action option').prop('selected', function () {
                return this.defaultSelected;
            });
        }
        else {
            $("#delete_products_id").val(products);
            $("#deleteModal").modal();
        }

    }
}
function showInventoryDialog(product_id) {
    $.get('/listing/get-products-inventory/' + product_id, {
        _token: $('meta[name="csrf-token"]').attr('content')
    }, function (data) {
        $(".product_inventory").html(data)
        $('#product_iid').val(product_id);
        $("#addInventory").modal();
    });
}

// Alert Settings
function showAlertSettings() {
    $.get('/listing/get-alert-settings', {
        _token: $('meta[name="csrf-token"]').attr('content')
    }, function (data) {
        if (data[0]['enable'] == 1) {
            $('#enable').val(data[0]['enable']).attr("checked", true);
        }
        if (data[0]['sms'] == 1) {
            $('#sms').val(data[0]['sms']).attr("checked", true);
        }
        if (data[0]['email'] == 1) {
            $('#email').val(data[0]['email']).attr("checked", true);
        }
        if (data[0]['push'] == 1) {
            $('#push').val(data[0]['push']).attr("checked", true);
        }
        if (data[0]['dash'] == 1) {
            $('#dash').val(data[0]['dash']).attr("checked", true);
        }

        $('#alert_quantity').val(data[0]['alert_quantity']);


        $("#alertSettings").modal();


    });
}

// Alert Settings Ended

function showCommonInvSettings() {
    $.get('/listing/get-commonInv-settings', {
        _token: $('meta[name="csrf-token"]').attr('content')
    }, function (data) {
        $(".commonInvSetting").html(data);
        $("#commonInventory").modal();
    });
}

// InventorySettings Started
function showInventorySettings(product_id) {
    $.get('/listing/get-products-settings-inventory/' + product_id, {
        _token: $('meta[name="csrf-token"]').attr('content')
    }, function (data) {
        $(".settings_inventory").html(data); // View File Called alerts.blade.php
        $('#product_id').val(product_id);
        $("#add_inventory_settings").modal();
    });
}

$('.modify_inv_setting').on('click', function () {

    toggle_modify_inventory()
    $('.inv_setting_first,.modify_inv_setting').hide();
    $('.inv_setting_sec,.save_inv_setting').show();
    populate_marketplace_and_setting_type_input()
});

$(document).on('click', '.inventory_setting_close ', function () {
    toggle_modify_inventory()
    $('.inv_setting_first,.modify_inv_setting').show();
    $('.inv_setting_sec,.save_inv_setting').hide();
})

var current_product_marketplace;
var current_product_id;
var current_total_inventory;
var current_inventory_type;

function toggle_modify_inventory() {
    $('#inv_setting_sec').html('');
    $('#inv_setting_first').html('');
    if (current_inventory_type == "Common") {
        $('#inv_setting_sec').append(getInventoryTabHTML('Common', current_product_marketplace, "checked"));
        $('#inv_setting_sec').append(getInventoryTabHTML('Custom', current_product_marketplace, ""));
    } else if (current_inventory_type == 'Custom') {
        $('#inv_setting_sec').append(getInventoryTabHTML('Common', current_product_marketplace, ""));
        $('#inv_setting_sec').append(getInventoryTabHTML('Custom', current_product_marketplace, "checked"));
    } else {
        $('#inv_setting_sec').append(getInventoryTabHTML('Common', current_product_marketplace, ""));
        $('#inv_setting_sec').append(getInventoryTabHTML('Custom', current_product_marketplace, ""));
    }
    $(".Custom_quantity_input").attr('readonly', false)
}

var origin = 0;
function OpenEditInventoryModal(product_id) {

    $('.inv_setting_first,.modify_inv_setting').show();
    $('.inv_setting_sec,.save_inv_setting').hide();
    current_product_id = product_id;
    var get_product_queue = $config.GET_PRODUCT_QUEUE.replace("PRODUCT_ID", product_id);

    $.get(get_product_queue, function (data, status) {
        $('#product_queue_logs').html('')
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].status == 'confirmed') {
                $('#product_queue_logs').append('<li class="widget_block"> Product  quantity update of <span>' + data[i].quantity + '</span> is in-queue, will be  pushed to <span>' + getMarketplaceNameByID(data[i].marketplace_id) +
                    '</span> in 2 mins; last updated at <span>' + data[i].updated_at + '</span> currently in <span>' + data[i].status + '</span> state. </li > ')
            } else if (data[i].status == 'pushed') {
                $('#product_queue_logs').append('<li class="widget_block"> Product quantity update of  <span>' + data[i].quantity + '</span> has been pushed to <span>' + getMarketplaceNameByID(data[i].marketplace_id) +
                    '</span> last updated at <span>' + data[i].updated_at + '</span> currently in <span>' + data[i].status + '</span> state. </li > ')
            }
            else if (data[i].status == 'in-queue') {
                $('#product_queue_logs').append('<li class="widget_block"> Please confirm the quantity update of  <span>' + data[i].quantity + '</span> for <span>' + getMarketplaceNameByID(data[i].marketplace_id) +
                    '</span> in the inventory page w.r.t this product; last updated at <span>' + data[i].updated_at + '</span> currently in <span>' + data[i].status + '</span> state. </li > ')
            }
            else if (data[i].status == 'in-progress') {
                $('#product_queue_logs').append('<li class="widget_block"> Processing quantity update of  <span>' + data[i].quantity + '</span> for <span>' + getMarketplaceNameByID(data[i].marketplace_id) +
                    '</span> last updated at <span>' + data[i].updated_at + '</span> currently in <span>' + data[i].status + '</span> state. </li > ')
            }
        }
    });

    var api = $config.GET_INVENTORY_DETAILS_API.replace("PRODUCT_ID", product_id);
    var api_pending_order_api = $config.GET_PENDING_ORDER_API.replace("PRODUCT_ID", product_id);
    $.get(api, function (data, status) {
        current_total_inventory = data.product.quantity;
        $('#total_quantity').val(data.product.quantity)
        origin = data.product.quantity;
        if (data.product_settings) {
            var handling_time = data.product_settings.handling_time;
            var inventory_type = data.product_settings.type;
        } else {
            if (!data.gloabl_settings) {
                var handling_time = 0;
                var inventory_type = 'Default';
            } else {
                var handling_time = data.gloabl_settings.handling_time;
                var inventory_type = data.gloabl_settings.type;
            }
        }
        current_inventory_type = inventory_type;
        if (handling_time == 0) {
            handling_time = 2
        }
        $('#handling_time').val(handling_time)
        if (data.product_marketplace.length > 1) {
            $('#modify_button').show()
        }
        current_product_marketplace = data.product_marketplace
        $('#inv_setting_sec').html('');
        $('#inv_setting_first').html('');
        $('#inv_setting_first').append(getInventoryTabHTML(inventory_type, data.product_marketplace, "checked"));
    });

    $.get(api_pending_order_api, function (data, status) {
        if (data != 0) {
            $('#show_pengind_orders').html('<br> This product has ' + data + ' pending order(s)');
            $('#show_pengind_orders').show();
        } else {
            $('#show_pengind_orders').hide();
        }
    });
}

function getInventoryTabHTML(InventoryType, productMarketplaces, checked) {
    $marketsHTMl = "";

    if (InventoryType == 'Common') {
        for (i = 0; i < productMarketplaces.length; i++) {
            $marketsHTMl += ` <div class="col-md-6">
                            <label>`+ getMarketplaceNameByID(productMarketplaces[i].marketplace_id) + `</label>
                            <input type="number" name="`+ InventoryType + `quantity_` + productMarketplaces[i].marketplace_id +
                `" id="` + InventoryType + `_quantity_` + productMarketplaces[i].marketplace_id + `"
                                class="` + InventoryType + `_quantity_input invent form-control" value="` + current_total_inventory + `" min="0" step="1"
                                oninput="validity.valid||(value='');" readonly="readonly">
                        </div>`
        }
        return `<div class="widget_block active">
                            <div class="row">
                                <div class="col-md-1">
                                    <input type="radio" name="Common" class="checkbox_custom checkbox_click"
                                        id="inventory_common" value="common" `+ checked + `>
                                </div>
                                <div class="col-md-11">
                                    <div style="font-weight: 500;margin-bottom: 4px">Common Inventory </div>
                                    <div style="font-size:13px;">Select Inventory based on Your Sales
                                                                    Channels</div>
                                    <div class="row" style="margin-top: 14px;">
                                        `+ $marketsHTMl + `
                                    </div>
                                </div>
                            </div>
                        </div><br>`
    } else if (InventoryType == 'Custom') {
        for (i = 0; i < productMarketplaces.length; i++) {
            initial_ratio[productMarketplaces[i].marketplace_id] = productMarketplaces[i].quantity / origin
            $marketsHTMl += ` <div class="col-md-6">
                            <label>`+ getMarketplaceNameByID(productMarketplaces[i].marketplace_id) + `</label>
                            <input type="number" name="quantity_`+ productMarketplaces[i].marketplace_id +
                `" id="` + InventoryType + `_quantity_` + productMarketplaces[i].marketplace_id + `"
                               class="` + InventoryType + `_quantity_input form-control" value="` + productMarketplaces[i].quantity + `" min="0" step="1"
                                oninput="validity.valid||(value='');" readonly="readonly">
                        </div>`
        }
        return `<div class="widget_block active">
                            <div class="row">
                                <div class="col-md-1">
                                    <input type="radio" name="Common" class="checkbox_custom checkbox_click"
                                        id="inventory_custom" value="custom" `+ checked + `>
                                </div>
                                <div class="col-md-11">
                                    <div style="font-weight: 500;margin-bottom: 4px">Custom Inventory </div>
                                    <div style="font-size:13px;">Inventory is split based on Custom Global inventory split</div>
                                    <div class="row" style="margin-top: 14px;">
                                        `+ $marketsHTMl + `
                                    </div>
                                </div>
                            </div>
                        </div>`
    } else {
        if (productMarketplaces.length > 1) {
            return `<div class="widget_block" style="background-color: #cce5ff;border: 1px solid #b8daff;">
                           No Inventory settings please click modify to create.
                        </div>`
        } else {
            return `<div class="widget_block" style="background-color: #cce5ff;border: 1px solid #b8daff;">
                           Product is avaliable at only one marketplace, no inventory settings required.
                        </div>`
        }

    }

}

function getMarketplaceNameByID(id) {
    switch (id) {
        case 1:
            return 'Amazon';
            break;
        case 2:
            return 'Flipkart';
            break;
        case 3:
            return 'Snapdeal';
            break;
    }
}

$('#total_quantity').on('change', function () {
    if (this.value <= 10) {
        alert('The is a critical value, the product inventory settings will change when you get an order');
    }
    console.log(initial_ratio)
    populate_marketplace_and_setting_type_input()
});

var initial_ratio = new Array()

function populate_marketplace_and_setting_type_input() {
    var value = $('#total_quantity').val();
    for (i = 0; i < current_product_marketplace.length; i++) {
        $('#Common_quantity_' + current_product_marketplace[i].marketplace_id).val(value)
    }
    for (i = 0; i < current_product_marketplace.length; i++) {
        var splitx = initial_ratio[current_product_marketplace[i].marketplace_id] * value
        $('#Custom_quantity_' + current_product_marketplace[i].marketplace_id).val(Math.round(splitx))
    }
}

function submit_inventory_update() {
    var total_quantity = $('#total_quantity').val()
    var quantity_sum = 0;
    var post_attr = {
        product_id: current_product_id,
        total_quantity: total_quantity,
        _token: $('input[name ="_token"]').val()
    }
    var type = 'custom';
    if ($('#inventory_common').is(":checked")) {
        type = 'Common';
        for (var i = 0; i < current_product_marketplace.length; i++) {
            post_attr['inventory_' + current_product_marketplace[i].marketplace_id] = $('#total_quantity').val();
        }
    } else if ($('#inventory_custom').is(":checked")) {
        type = 'Custom';
        for (var i = 0; i < current_product_marketplace.length; i++) {
            var quantity = $('#Custom_quantity_' + current_product_marketplace[i].marketplace_id).val();
            quantity_sum = quantity_sum + parseInt(quantity)
            post_attr['inventory_' + current_product_marketplace[i].marketplace_id] = quantity;
        }
        if (quantity_sum != total_quantity) {
            alert('Split not equal to total inventory ' + quantity_sum + ' ' + total_quantity);
            return 1;
        }
    }
    post_attr['Common'] = type.toLowerCase();
    save_product_inventory()
    $.post($config.UPDATE_INVENTORY_POST, post_attr, function (result) {
        console.log('done');
        window.location.href = '';
    });
}

// var current_product_marketplace;
// var current_product_id;
// var current_total_inventory;

function save_product_inventory() {

    var type = null
    if ($('#inventory_common').is(":checked")) {
        type = 'Common';
    } else if ($('#inventory_custom').is(":checked")) {
        type = 'Custom';
    }

    if (type) {
        $.post($config.INVENTORY_SETTINGS_UPDATE, {
            type: type,
            product_id: current_product_id,
            _token: $('input[name ="_token"]').val(),
            handling_time: $('#handling_time').val()

        }, function (result) {
            alert('saved');
        });
    }
}
