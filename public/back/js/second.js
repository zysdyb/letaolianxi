

$(function() {

  var currentPage = 1;
  var pageSize = 5;

  render();

  function render() {

    $.ajax({
      type: "get",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType:"json",
      success: function (info) {

        var htmlStr = template("secondTpl", info);

        $("tbody").html(htmlStr);
          
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3,
          totalPages: Math.ceil(info.total / info.size ),
          currentPage: info.page,
          onPageClicked:function(a,b,c, page){

            currentPage = page;

            render();
          }

        })

      }
    })

  };


  $('#addBtn').click(function(){

     $('#addModal').modal("show");

     $.ajax({
        type:'get',
        url:"/category/queryTopCategoryPaging",
        data:{

           page:1,
           pageSize:100

        },
        dataType:"json",
        success:function(info){

           var htmlStr = template("dropdownTpl",info);
           $(".dropdown-menu").html(htmlStr);
            

        }

     })

  });

  
  $(".dropdown-menu").on("click","a",function(){

    var txt = $(this).text();
    
    $("#dropdownText").text( txt );

  });


  $("#fileupload").fileupload({
 
    dataType:"json",
    done: function(e, data){

      var result = data.result;

      var picUrl = result.picAddr;
    
      $("#imgBox img").attr("src",picUrl);   

    }    

  })

})

