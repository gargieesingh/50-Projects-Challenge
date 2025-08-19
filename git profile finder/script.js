'use strict';

const searchBtn = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const profile = document.querySelector('#profile');


form.addEventListener('submit', async(event)=>{
    event.preventDefault(); //stops the page reload
    const username = input.value.trim();
    
    input.value ="";
    //IF NO USERNAME ENTERED:
    if(!username){
        showError('Please enter a username');
        return;
    }

    //DO THE SEARCH:
    await fetchAndRenderUser(username);
    

})

function showError(message){
    profile.innerHTML = `<div class="error  border-2 border-t-0 border-red-500 rounded-b-2xl w-[100%] h-10 bg-red-300 text-center text-black font-bold text-xl">${message}</div>`;
}
//PROCESS IN SEARCHING:
    
    //LOADING FEATURE:
    function setLoading(isLoading){
        if(isLoading){
            searchBtn.setAttribute('disabled', 'true');
            profile.innerHTML = `<p class="loading border-2 border-t-0 border-green-500 rounded-b-2xl w-[100%] h-10 bg-green-300 text-center text-black font-bold text-xl">Loading....</p>`;
        } else{
            searchBtn.removeAttribute('disabled');
        }
    }

    //fetchAndRenderUser FUNCTION:
    async function fetchAndRenderUser(username){
        try{
            setLoading(true);
            const userResponse = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

            //if GitHub says 404 , we handle it before trying to parse JSON
            if(!userResponse.ok){
                if(userResponse.status === 404){
                    showError('User not found. Did you enter the right username?')
                }else{
                    showError(`Request failed. HTTP status: ${userResponse.status}`);
                }
                return;
            }

            //converting reponse from json to js 
            const user = await userResponse.json();

            //Render the user's profile
            renderProfile(user);

        } catch (error){
            showError('Could not fetch data. Check your internet and try again.')
        }finally{
            setLoading(false);
        }
    }
//PROCESS IN RENDERING
    function renderProfile(user){
        const name = user.name ?? 'No name provided';
        const bio = user.bio ?? 'No bio available';
        const location = user.location ?? 'Location not provided';

        profile.innerHTML = `
            <div class="pf border-2 rounded-2xl rounded-t-none mt-3 border-white/30 flex bg-black relative">
                <img class="h-45 w-45 rounded-full m-3 border-double border-6 border-cyan-700 " src="${user.avatar_url}" alt="Avatar" />
                <div class="flex flex-col justify-evenly">
                    <h2 class="name flex flex-col font-extrabold text-2xl">${name} <span class="userlogn text-xs text-gray-400 italic">@${user.login}</span>
                    </h2>

                    <p class="bio">${bio}</p>

                    <div class="stats flex flex-col">
                        
                        <div class="flex justify-between italic">
                            <span>Followers: <strong>${user.followers}</strong></span>
                            <span>Following: <strong>${user.following}</strong></span>
                        </div>
                        <span>Repos: <strong>${user.public_repos}</strong></span>
                    </div>

                    <p class=" italic absolute right-5 bottom-5 underline font-mono hover:text-blue-500">
                        <a href="${user.html_url}" target="_blank">View GitHub Profile</a>
                    </p>
                </div>
            </div>
            `;
    }