texteditor = {

    texteditorFunctions: function(){
                
        $(document).ready(function(){  
   
          
            $('#textarea').val('');

            $('#textarea').hover(function() {
                $(this).attr('contenteditable', 'true');
            });

            $('.ol').click(function() {
                document.execCommand('insertOrderedList');
            });

            $('.ul').click(function() {
                document.execCommand('insertUnorderedList');
            });
            
            $('.glyphicon-bold').click(function() {
                document.execCommand('bold');
            });
            
            $(".glyphicon-italic").click(function(){
                document.execCommand('italic');
            });

            $(".undo").click(function(){
                 document.execCommand('undo', false, null);
            });

            $(".redo").click(function(){
                 document.execCommand('redo', false, null);
            });

            $(".glyphicon-align-left").click(function(){
                document.execCommand('justifyLeft');
            });

            $(".glyphicon-align-center").click(function(){
                document.execCommand('justifyCenter');
            });

            $(".glyphicon-align-right").click(function(){
                document.execCommand('justifyRight');
            });

            $(".glyphicon-align-justify").click(function(){
                document.execCommand('justifyFull');
            });
       
            $(".glyphicon-minus").click(function(){
                $("#textarea").val($.trim($("#textarea").val()).replace(/ /g,''));
                $("#textarea").val($.trim($("#textarea option:selected").val()).replace(/ /g,''));
            }); 
            
            
            $('.paragraph').on('change', function () {
                var text = $(this).find("option:selected").val();

                switch (text) { 
                    case 'p': 
                        document.execCommand("fontSize", false, "3");
                        break;
                    case 'h2': 
                        document.execCommand("fontSize", false, "30");
                        break;
                    case 'h3': 
                        document.execCommand("fontSize", false, "6");
                        break;
                    case 'h4': 
                        document.execCommand("fontSize", false, "5");
                        break;
                    default:
                        document.execCommand("fontSize", false, "3");
                        break;
                }
            });


            $(function () {
                $(":file").change(function () {
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = imageIsLoaded;
                        reader.readAsDataURL(this.files[0]);
                    }
                });
            });
            
            function imageIsLoaded(e) {
                $('#textarea').append(' <img id="myImg"  alt="Uploaded file will appear here" />');
                $('#myImg').attr('src', e.target.result);
            };
            
            $('.glyphicon-picture').on('click',function() {
                $("input[type='file']").click();

            });

            $("[data-toggle=popover]").popover({
                html: true, 
                content: function() {
                      return $('#popover-content').html();
                    }
            });



         
        });
    }
}
//function Call 
//texteditor.texteditorView(); 
texteditor.texteditorFunctions();



    // texteditorView: function(){
    //     $( window ).on( "load", function() {
    //         //editBtnOne
    //         $('.textEditor').append('<div class="row editBtnOne"></div>');
    //         $(".editBtnOne").append('<div class="col-md-12 textEditingBtn" style="background-color: #dcd8cf;"></div>');
    //         $(".textEditingBtn").append('<div class="btn-group "></div>');    
    //         $(".btn-group").append('<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"  aria-expanded="false"> Paragraph </button>');
    //         $(".btn-group").append('<ul class="dropdown-menu"> red</ul>');

    //         var arr = [
    //             'glyphicon-bold',
    //             'glyphicon-italic',
    //             'fa fa-underline',
    //             'fa fa-quote-left',
    //             'fa fa-quote-right',
    //             'fa fa-undo',
    //             'glyphicon-list',
    //             'glyphicon-list',
    //             'blockquote',
    //             'glyphicon-align-left',
    //             'glyphicon-align-center',
    //             'glyphicon-align-right',
    //             'glyphicon-align-justify',
    //             'glyphicon-link'
    //             ];

    //         $.each(arr, function (index, value) {
    //             $(".textEditingBtn").append(" <span class=\"glyphicon btn "+ value +"\"></span>");
    //         });

    //         //editBtnTwo

    //         $('.textEditor').append('<div class="row editBtnTwo"></div>');
    //         $('.editBtnTwo').append('<div class="col-md-12 textEditingBtnTwo" style="background-color:#dcd8cf;"></div>');
    //         $('.textEditingBtnTwo').append('<span class="	glyphicon glyphicon-grammer">ABC</span>');
    //         $('.textEditingBtnTwo').append(' <span class="	glyphicon glyphicon-minus"></span>');
    //         $('.textEditingBtnTwo').append('<div class="btn-group edit-btn-group-one"></div>');
    //         $('.edit-btn-group-one').append('<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-text-color"></span></button>');
    //         $('.textEditingBtnTwo').append('<ul class="dropdown-menu">red</ul>');
    //         $('.textEditingBtnTwo').append('<span class="glyphicon glyphicon-erase"></span>');
            
    //         //  textarea

    //         $('.textEditor').append('<div class="row text"></div>');
    //         $('.text').append('<div class="col-md-12 textarea" style="background-color:#ffffff;"></div>');
    //         $('.textarea').append('<div class="col-md-12" id="textarea"></div>');
            
    //     });
    // },




    // <div class="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se ck-dropdown__panel-visible">
    //     <form class="ck ck-media-form" tabindex="-1">
    //         <div class="ck ck-labeled-input">
    //             <label class="ck ck-label" for="ck-input-e01ad07e9f63dd788c6c08c04dd1bbbb3">Media URL</label>
    //             <input type="text" class="" placeholder="https://example.com" >
    //             <div class="ck ck-labeled-input__status" id="">Paste the media URL in the input.</div>
    //         </div>
    //         <button class="" type="submit" tabindex="-1" aria-labelledby="ck-editor__aria-label_ea834e499ce7064b94ed3f37306639578">
    //             <svg class="ck ck-icon ck-button__icon" viewBox="0 0 20 20">
    //                 <path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"></path></svg>
    //                 <span class="ck ck-tooltip ck-tooltip_s">
    //                     <span class="ck ck-tooltip__text">Save</span>
    //                 </span>
    //                 <span class="ck ck-button__label" id="ck-editor__aria-label_ea834e499ce7064b94ed3f37306639578">Save</span>
    //         </button>
    //         <button class="ck ck-button ck-off ck-button-cancel" type="button" tabindex="-1" aria-labelledby="ck-editor__aria-label_ea7bea8b6fd800590cae6427dd9343567">
    //             <svg class="ck ck-icon ck-button__icon" viewBox="0 0 20 20">
    //                 <path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"></path>
    //             </svg>
    //             <span class="ck ck-tooltip ck-tooltip_s">
    //                 <span class="ck ck-tooltip__text">Cancel</span>
    //             </span>
    //             <span class="ck ck-button__label" id="ck-editor__aria-label_ea7bea8b6fd800590cae6427dd9343567">Cancel</span>
    //         </button>
    //     </form>
    // </div>