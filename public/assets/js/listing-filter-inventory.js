function populateFilterProductData(page) {
            $.post(filter_api_url+'?page='+page, {
            _token: $('meta[name="csrf-token"]').attr('content'),
            categories: categories,
            brands: brands,
            qty: qty,
            marketplace: marketplace
            }, function (data) {
            console.log("C: "+ categories)
            console.log("B: "+ brands)
            console.log("M: "+marketplace)
            $(".products_list").html(data);
            $('.page-link').attr('href','#')
            $('.page-link').click(function (e) {
            handleFilterPaginationOnClick(this)
            })
            
            });
            }