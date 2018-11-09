<template lang="pug">
  .container
    .grid-container
      .item.lvl-1
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Fimage1.jpg?alt=media&token=6af97302-4031-4a42-81b3-5a7d0b246dcc")
      .item.lvl-2
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Fimage3.JPEG?alt=media&token=e6f030d9-eb3c-453c-b2a2-df1243578a23")
      .item.lvl-2
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-81162951850.JPEG?alt=media&token=efb5f15b-8e01-4bd9-bae5-0373d68f872a")
      .item.lvl-1
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Fimage2.JPEG?alt=media&token=aba1106c-50ac-4c9f-8eb5-8186ee44c58e")
      .item.lvl-2
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Fimage6.JPG?alt=media&token=5c7062fb-fced-4e62-ac95-830bc3fa4079")
      .item.lvl-1
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage3.jpg?alt=media&token=0a7a27d1-6ed6-4118-99ea-ea9ef0b497b2")
      .item.lvl-1
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Fimage4.JPEG?alt=media&token=1ba4d21a-1f03-49d7-94eb-a1b27e992257")
      .item.lvl-2
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage7.JPG?alt=media&token=bab52def-ba59-4c40-97f7-d40917ec38c6")
      .item.lvl-1
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage10.JPG?alt=media&token=e188e884-15fa-4748-9e03-982feed9f730")
      .item.lvl-2
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage12.jpg?alt=media&token=ad6d81a1-74df-4817-aecc-031c1ce3690b")
      .item.lvl-2
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2F856ce344_original%20Ban%CC%83o%201.jpg?alt=media&token=66e1bdba-f88e-48e6-b377-47dd001f8e3b")
      .item.lvl-1
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-81162952392.JPEG?alt=media&token=e64a688a-6b23-4cf7-b2f5-468b5664d20b")
      
</template>


<script>
  export default {
    
  }
  
</script>

<style scoped>
  .grid-container {
    display: grid;
    grid-template: repeat(5, 380px) / repeat(3, 1fr);
    grid-gap: 10px;
    margin: 120px 0 150px 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .lvl-1{
    grid-column-end: span 2;
  }
  .lvl-1 img {
    object-fit: cover;
  }
  .lvl-2{
    grid-row-end: span 1;
  }
  .lvl-2 img {
    object-fit: cover;
  }
  .lvl-3 {
    grid-column-end: span 3;
  }
  .lvl-3 img {
    object-fit: cover;
  }
  @media screen and (max-width: 992px){
    .grid-container {
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: repeat(2, 1fr);
    }
    .lvl-2, .lvl-1, .lvl-3 {
      grid-column-end: auto;
    }
  }
  @media screen and (max-width: 576px){
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 50vh);
    }
    .lvl-3 {
      grid-column-end: auto;
    }
    .lvl-2 {
      grid-row-end: auto;
    }
    .lvl-1 {
      grid-column-end: span 2;
    }
  }
</style>