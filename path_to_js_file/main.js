
// take text
// change style to bold

function toggleBold()
{
    var textObj = document.getElementById('textId');

    if(textObj.style.fontWeight == 'bold')
    {
        textObj.style.fontWeight = 'normal';
    } else 
    {
        textObj.style.fontWeight = 'bold';
    }
}

function toggleItalic()
{
    var textObj = document.getElementById('textId');

    if(textObj.style.fontStyle == 'italic')
    {
        textObj.style.fontStyle = 'normal';
    } else 
    {
        textObj.style.fontStyle = 'italic';
    }
}
function toggleUnderline()
{
    var textObj = document.getElementById('textId');

    if(textObj.style.textDecoration =='underline'){
        
        textObj.style.textDecoration= '';
    }
    else{
        textObj.style.textDecoration= 'underline';
    }
}


function changeSize(selectTag){

        var newSize = selectTag.options[selectTag.selectedIndex].text;
        console.log(newSize);
        
        var textObj = document.getElementById('textId').style.fontSize = newSize;
}
function changePolice(selectTag){

    var newpolice = selectTag.options[selectTag.selectedIndex].text;
    console.log(newpolice);
    
    var textObj = document.getElementById('textId').style.fontFamily = newpolice;
}
$(document).ready(function(){
    $(".im1").mouseover(function(){
        $(".btnim1").css("visibility","visible")
    })
    $(".im1").mouseout(function(){
        $(".btnim1").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im2").mouseover(function(){
        $(".btnim2").css("visibility","visible")
    })
    $(".im2").mouseout(function(){
        $(".btnim2").css("visibility","hidden")
    })
  });

  $(document).ready(function(){
    $(".im3").mouseover(function(){
        $(".btnim3").css("visibility","visible")
    })
    $(".im3").mouseout(function(){
        $(".btnim3").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im4").mouseover(function(){
        $(".btnim4").css("visibility","visible")
    })
    $(".im4").mouseout(function(){
        $(".btnim4").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im5").mouseover(function(){
        $(".btnim5").css("visibility","visible")
    })
    $(".im5").mouseout(function(){
        $(".btnim5").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im6").mouseover(function(){
        $(".btnim6").css("visibility","visible")
    })
    $(".im6").mouseout(function(){
        $(".btnim6").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im7").mouseover(function(){
        $(".btnim7").css("visibility","visible")
    })
    $(".im7").mouseout(function(){
        $(".btnim7").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im8").mouseover(function(){
        $(".btnim8").css("visibility","visible")
    })
    $(".im8").mouseout(function(){
        $(".btnim8").css("visibility","hidden")
    })
  });
  $(document).ready(function(){
    $(".im9").mouseover(function(){
        $(".btnim9").css("visibility","visible")
    })
    $(".im9").mouseout(function(){
        $(".btnim9").css("visibility","hidden")
    })
  });
