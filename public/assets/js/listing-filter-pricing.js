

function populateFilterProductData(page) {
            $.post(filter_api_url+'?page='+page, {
            _token: $('meta[name="csrf-token"]').attr('content'),
            categories: categories,
            brands: brands,
            qty: qty,
            marketplace: marketplace
            }, function (data) {
            $(".products_list").html(data);
            $('.page-link').attr('href','#')
            $('.page-link').click(function (e) {
            handleFilterPaginationOnClick(this)
            })
            
            });
            }
            function handleFilterPaginationOnClick(doc) {
            populateFilterProductData($(doc).html())
            }
            
        //Function to select all the products
        function setSelected()
        {
             ($('.all_products').is(":checked") ? $('.products_checkbox').prop("checked", true) :    $('.products_checkbox').prop("checked", false))
        }
        
        //Updating products
        function updateProduct(product_id, label, value) 
        {
            $.post('/listing/update-product-field', {
                _token: $('meta[name="csrf-token"]').attr('content'),
                label: label,
                value: value,
                product_id: product_id
            }, function (data) {
               
            }); 
        }

        function downloadProducts() 
        {
            var products = "";
            $(".products_checkbox").each(function(){
                if ($(this).is(":checked")) { 
                    products = products+$(this).val()+",";
                }
            })
            products = products.substring(0, products.length-1);
            var url = "/listing/custom-pricing-download";
            if($("#bulk_action").val() == 'common_pricing')
            {
                url = "/listing/common-pricing-download";
            }
            $.post(url, {
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
        
        function bulkAction(action)
        {
            $("#request_download").attr('disabled', 'disabled');
            if(action != "") 
            {
                $("#request_download").removeAttr('disabled');
            }           
        }
        
    var mx0 = 0;
    var px0 = 0;
    
    var mx1= 0;
    var px1 = 0;
    
    var mx2 = 0;
    var px2 = 0;
    
    var mx3 = 0;
    var px3 = 0;
    
    var mx4 = 0;
    var px4 = 0;

    var mx5 = 0;
    var px5 = 0;
    
        function showPricingDialog(product_id)
        {
            $.get('/listing/get-products-pricing/'+product_id, {
                _token: $('meta[name="csrf-token"]').attr('content')
            }, function (data) {
                $(".product_inventory").html(data)
                $('#product_id').val(product_id);
                    $("#addInventory").modal();
                    mx0 = $('#mrp').val()
                    px0 = $('#price').val()

                    mx1 = $('#mrp_1').val()
                    px1 = $('#price_1').val()

                    mx2 = $('#mrp_2').val()
                    px2 = $('#price_2').val()

                    mx3 = $('#mrp_3').val()
                    px3 = $('#price_3').val()

                    mx4 = $('#mrp_4').val()
                    px4 = $('#price_4').val()

                    mx5 = $('#mrp_5').val()
                    px5 = $('#price_5').val()      
            }); 
        }