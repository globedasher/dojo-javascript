var new_ninja = {
   name: 'Maynard G. Krebbs',
   profession: 'beatnick',
   favorite_language: 'Bebop', //like that's even a question!
   dojo: 'Dobie Gillis'
};

var key;
for( key in new_ninja){
  if (new_ninja.hasOwnProperty(key)){
    console.log(key, new_ninja[key]);
  }
}
