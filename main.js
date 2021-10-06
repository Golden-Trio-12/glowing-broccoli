var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg","https://previews.123rf.com/images/jemastock/jemastock1806/jemastock180602468/102904024-cute-father-cartoon-vector-illustration-graphic-design.jpg"];
var names = ["Family Book"," Maanya Dixit - Me" ," Ruchi Dixit - Mumma" , " Sameer Dixit - Papa" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
