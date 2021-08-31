

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
        function downloadcsv() 
        {            
            $.get('/listing/download-csv', {
                _token: $('meta[name="csrf-token"]').attr('content')
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
       function downloadProducts() 
        {
            var products = "";
            $(".products_checkbox").each(function(){
                if ($(this).is(":checked")) { 
                    products = products+$(this).val()+",";
                }
            }) 
            var market_place = 0;

            $(".market_place").each(function(){
                if($(this).is(":checked"))
                {
                    market_place = $(this).val();
                }
            })
            if(market_place == 0 )
            {
                $(".market_place").focus();
                return;
            }
            products = products.substring(0, products.length-1);
            
            
            $.post('/listing/download-products', {
                _token: $('meta[name="csrf-token"]').attr('content'),
                products: products,
                market_place: market_place
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
            if(action == "update_products") 
            {
                $(".market_place_div").show();
                $("#request_download").removeAttr('disabled');
            }
            if(action == "delete_product")
            {
                $(".market_place_div").hide();

                var products = "";
                $(".products_checkbox").each(function(){
                    if ($(this).is(":checked")) { 
                        products = products+$(this).val()+",";
                    }
                })
                products = products.substring(0, products.length-1);
                if(products == "")
                {
                    $('#bulk_action option').prop('selected', function() {
                        return this.defaultSelected;
                    });                    
                }
                else 
                {   
                    $("#delete_products_id").val(products);
                    $("#deleteModal").modal();    
                }
                
            }
        }
        function productAction(product_id, action)
        {
            if(action == 'delete')
            {
                $("#delete_products_id").val(product_id);
                $("#deleteModal").modal();    
            }
            if(action == 'edit')
            {
                window.location.href = "/listing/manage-products/"+product_id;

            }
        }