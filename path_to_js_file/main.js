
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