'use strict';

const searchBtn = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const profile = document.querySelector('#profile');

form.addEventListener('submit', async(event)=>{
    event.preventDefault(); //stops the page reload
    const username = input.value.trim();
    console.log(`Username : ${username}`);

    //IF NO USERNAME ENTERED:
    if(!username){
        showError('Please enter a username');
        return;
    }

    //DO THE SEARCH:
    await fetchAndRenderUser(username);

})

function showError(message){
    profile.innerHTML = `<div class="error">${message}</div>`;
}
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

    //fetchAndRenderUser FUNCTION:
    async function fetchAndRenderUser(username){
        try{
            setLoading(true);
            const userResponse = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

            console.log(userResponse);

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
            console.log(user);

            //Render the user's profile
            renderProfile(user);

        } catch (error){
            showError('Could not fetch data. Check your internet and try again.')
        }
    }
//PROCESS IN RENDERING
    function renderProfile(user){
        const name = user.name ?? 'No name provided';
        const bio = user.bio ?? 'No bio available';
        const location = user.location ?? 'Location not provided';

        profile.innerHTML = `
            <div class="pf">
                <img class="avatar" src="${user.avatar_url}" alt="Avatar" />
                <div>
                    <h2 class="name">${name} <span class="userlogn">@${user.login}</span>
                    </h2>

                    <p class="bio">${bio}</p>

                    <div class="stats">
                        <span>Repos: <bold>${user.public_repos}</bold></span>
                        <span>Followers: <bold>${user.followers}</bold></span>
                        <span>Following: <bold>${user.following}</bold></span>
                    </div>

                    <p>
                        <a href="${user.html_url}" target="_blank">View GitHub Profile</a>
                    </p>
                </div>
            </div>
            `;
    }