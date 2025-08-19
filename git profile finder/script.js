'use strict';

const searchBtn = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const profile = document.querySelector('#profile');

form.addEventListener('submit', async(event)=>{
    event.preventDefault(); //stops the page reload
    const username = input.value.trim();

    //IF NO USERNAME ENTERED:
    if(!username){
        showError('Please enter a username');
        return;
    }
    function showError(message){
        profile.innerHTML = `<div class="error">${message}</div>`;
    }

    //DO THE SEARCH:
    await fetchAndRenderUser(username);


    //PROCESS IN SEARCHING:
    
    //LOADING FEATURE:
    function setLoading(isLoading){
        if(isLoading){
            searchBtn.setAttribute('disabled', 'true');
            profile.innerHTML = `<p class="loading">Loading....</p>`;
        } else{
            searchBtn.removeAttribute('disabled');
        }
    }
})