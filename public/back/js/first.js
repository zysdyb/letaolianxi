

$(function () {

  var currentPage = 1;
  var pageSize = 5;

  render();


  function render(){

    $.ajax({

      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function (info) {
  
        var htmlStr = template("firstTpl",info);
        $('tbody').html( htmlStr );
  
        $("#paginator").bootstrapPaginator({
  
          bootstrapMajorVersion: 3,
          totalPages: Math.ceil(info.total / info.size),
  
          currentPage: info.page,
  
          onPageClicked: function(a,b,c,page){
  
            currentPage = page;
  
            render(); 
          }
  
        }) 
      }
  
    })
  }


})