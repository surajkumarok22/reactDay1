import React from "react";

function Card({username, btnText}) {
    console.log({username});
    console.log({btnText});
    return(
       <div>
        <div class="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/15392/120-SM618699.jpg" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        {username}
      </p>
      <p class="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-green-600 hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{btnText}</button>
  </div>
</div>
       </div>
    )
}

export default Card;