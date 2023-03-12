document.querySelector('#push').onclick =
            function(){
                if(document.querySelector('#newtask input').
                value.length == 0){
                    alert("Vui lòng nhập 1 công việc");
                }
                else{
                    document.querySelector('#tasks').innerHTML
                    += `<div class="task">
                    <span id="taskname">
                    ${document.querySelector('#newtask input').
                    value}
                    </span>
                    <button class="delete">Xóa</button>
                    <br>
                    <hr>
                    <br>
                    </div>
                    
                    `;

                    var current_tasks = document.querySelectorAll('.delete');

                    for(var i = 0; i < current_tasks.length; i++){
                        current_tasks[i].onclick = function(){
                            this.parentNode.remove();
                        }
                    }

                    var tasks = document.querySelectorAll('#taskname');

                    for(var i = 0; i < tasks.length; i++){
                        tasks[i].onclick = function(){
                            this.classList.toggle('completed');
                        }
                    }
                    document.querySelector('#newtask input').value="";
                }
            }