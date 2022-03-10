const a=document.querySelector("#form");
const b=document.querySelector("#input");
const div =document.querySelector("#div");
 a.addEventListener("submit",async function(e){
         e.preventDefault();
      const p={params:{q:b.value}}
      const ami=await axios.get(`https://api.tvmaze.com/search/shows`,p)
      bg(ami.data);
      b.value="";
      
 })

 const bg =(s)=>{
     for( r of s){
         if(r.show.image){

         
        const omg=document.createElement("img");
        omg.src=r.show.image.medium;
        div.append(omg);
         }
     }
 }
