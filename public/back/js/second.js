

$(function () {

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
      dataType: "json",
      success: function (info) {

        var htmlStr = template("secondTpl", info);

        $("tbody").html(htmlStr);

        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3,
          totalPages: Math.ceil(info.total / info.size),
          currentPage: info.page,
          onPageClicked: function (a, b, c, page) {

            currentPage = page;

            render();
          }

        })

      }
    })

  };


  $('#addBtn').click(function () {

    $('#addModal').modal("show");

    $.ajax({
      type: 'get',
      url: "/category/queryTopCategoryPaging",
      data: {

        page: 1,
        pageSize: 100

      },
      dataType: "json",
      success: function (info) {

        var htmlStr = template("dropdownTpl", info);
        $(".dropdown-menu").html(htmlStr);


      }

    })

  });


  $(".dropdown-menu").on("click", "a", function () {

    var txt = $(this).text();

    var id = $(this).data("id");

    $("#dropdownText").text(txt);

    $('[name="categoryId"]').val(id);

    $('#form').data("bootstrapValidator").updateStatus("categoryId", "VALID");

  });


  $("#fileupload").fileupload({

    dataType: "json",
    done: function (e, data) {

      var result = data.result;

      var picUrl = result.picAddr;

      $("#imgBox img").attr("src", picUrl);

      $('[name="brandLogo"]').val(picUrl);

      $('#form').data("bootstrapValidator").updateStatus("brandLogo", "VALID")
    }

  });


  $("#form").bootstrapValidator({

    excluded: [],

    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
      categoryId: {
        validators: {
          notEmpty: {
            message: "请选择一级分类"
          }
        }
      },
      brandName: {
        validators: {
          notEmpty: {
            message: "请选择二级分类"
          }
        }
      },
      brandLogo: {
        validators: {
          notEmpty: {
            message: "请选择图片"
          }
        }
      }
    }

  });


  $("#form").on("success.form.bv", function (e) {

    e.preventDefault();

    $.ajax({
      url: "/category/addSecondCategory",
      type: "post",
      data: $('#form').serialize(),
      success: function (info) {

        $('#addModal').modal("hide");

        $('#form').data("bootstrapValidator").resetForm(true);


        currentPage = 1;
        render();


        $('#dropdownText').text("请选择1级分类")


        $('#imgBox img').attr("src", "images/none.png")
      }
    })
  })


});

