const URL = "js/json.js";



fetch(URL)
    .then(response => response.json())
    .then(data => renderProject(data))
    .catch(error => console.error('Error fetching data:', error));

function renderProject(data) {
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').innerHTML = data.description; // Use innerHTML to render HTML content
    document.getElementById('project-image').src = data.project_image;

    const outcomesList = document.getElementById('learning-outcomes');
    data.learning_outcomes.forEach(outcome => {
        const li = document.createElement('li');
        li.textContent = outcome;
        outcomesList.appendChild(li);
    });

    const prereqList = document.getElementById('pre-requisites');
    data.pre_requisites.forEach(pre => {
        const li = document.createElement('li');
        li.textContent = pre;
        prereqList.appendChild(li);
    });

    const tasksContainer = document.getElementById('tasks');
    data.tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = task.task_title;
        taskDiv.appendChild(taskTitle);

        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.task_description;
        taskDiv.appendChild(taskDescription);

        task.assets.forEach(asset => {
            const assetDiv = document.createElement('div');
            assetDiv.classList.add('asset');

            const assetTitle = document.createElement('h4');
            assetTitle.textContent = asset.asset_title;
            assetDiv.appendChild(assetTitle);

            const assetDescription = document.createElement('p');
            assetDescription.textContent = asset.asset_description;
            assetDiv.appendChild(assetDescription);

            if (asset.asset_content_type === 'video') {
                const iframe = document.createElement('iframe');
                iframe.src = asset.asset_content;
                iframe.width = '560';
                iframe.height = '315';
                iframe.frameBorder = '0';
                assetDiv.appendChild(iframe);
            } else if (asset.asset_content_type === 'article') {
                const link = document.createElement('a');
                link.href = asset.asset_content;
                link.textContent = "Read More";
                assetDiv.appendChild(link);
            }
        });

        tasksContainer.appendChild(taskDiv);
    });
}
