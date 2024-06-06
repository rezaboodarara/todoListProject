function sidebarOpener(){
    document.getElementById("mySidenav").style.display = "flex"
    document.getElementById("mySidenav").style.width = "75%"
    
    // const all = document.querySelector('*')
    // all.style.backgroundColor = 'red'
    // document.body.style.backgroundColor = "#635959";
    // all.style.backgroundColor = "#635959";
}
function sidebarCloser(){
    document.getElementById("mySidenav").style.width = "0%" 
    document.getElementById("mySidenav").style.display = "none"
}
let x = window.matchMedia("(min-width: 1024px)")
x.addEventListener('change',()=>{
    
    if (x.matches) { // If media query matches
        document.getElementById("mySidenav").style.display = "flex"
        document.getElementById("mySidenav").style.width = "25%"
    } else {
        document.getElementById("mySidenav").style.display = "none"
        document.getElementById("mySidenav").style.width = "75%"
      }
})

function addTask(){
    document.body.querySelector("#nothingToDo").style.display = 'none';
    document.body.querySelector("#taskAdder").style.display = 'none';
    document.body.querySelector("#newTask").style.display = 'flex';
}
function addTaskCloser(){
    if(!task.length){
        document.body.querySelector("#nothingToDo").style.display = 'flex';
    }
    document.body.querySelector("#taskAdder").style.display = 'flex';
    document.body.querySelector("#newTask").style.display = 'none';
}

// const all = document.querySelector('*');
const menuBtn = document.body.querySelector("#menuBtn");
menuBtn.addEventListener("click",sidebarOpener);

const closeBtn = document.body.querySelector("#closeBtn");
closeBtn.addEventListener("click",sidebarCloser);

const taskAdder = document.body.querySelector("#taskAdder");
taskAdder.addEventListener("click",addTask);

const taskAdderCloser = document.body.querySelector("#taskAdderCloser");
taskAdderCloser.addEventListener("click",addTaskCloser);



document.body.querySelector("#tags").addEventListener("click",()=>{
    if(document.body.querySelector("#openedTag")){
        if(document.body.querySelector("#openedTag").style.display=='none'){
            document.body.querySelector("#closedTag").style.display = "none";
            document.body.querySelector("#openedTag").style.display = "inline-block";
            document.body.querySelector("#tagValue").style.display = "flex";
        }else{
            document.body.querySelector("#closedTag").style.display = "inline-block";
            document.body.querySelector("#openedTag").style.display = "none";
            document.body.querySelector("#tagValue").style.display = "none";
        }
    }
})

// function taskRender(){
//     document.body.querySelector('#todayTask').innerHTML= `  <button id="valueBtn" class="flex my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#C3FFF1] text-[#11A483]">
//     <img class="w-3 h-3 my-auto" src="assets/closeTag.png" alt="">
//     <p>پایین</p>
//   </button>`
// }


let priority = ''
function takeValue(){
    //to do:
    //take value of button
    // document.body.querySelector("#tags").style.display = "none";
    // document.body.querySelector("#openedTag").style.display = "none";
    // document.body.querySelector("#tagValue").style.display = 'none';
    if(this.innerText == 'پایین'){
        priority = 'low'
        document.body.querySelector("#tagDivision").innerHTML= `<button id='chosenTag' value ='low' id="valueBtn valueCloser" class="flex my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#C3FFF1] text-[#11A483] dark:bg-dark-green-background">
        <img class="w-6 h-6 my-auto" src="assets/closeTag.png" alt="">
        <p>پایین</p>
        </button>`
    }else if(this.innerText == 'متوسط'){
        priority = 'medium'
        document.body.querySelector("#tagDivision").innerHTML= `<button id='chosenTag' value ='medium' id="valueBtn valueCloser" class="flex my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFEFD6] text-[#FFAF37] dark:bg-dark-yellow-background">
        <img class="w-6 h-6 my-auto" src="assets/closeTag.png" alt="">
        <p>متوسط</p>
        </button>`
    }else if(this.innerText == 'بالا'){
        priority = 'high';
        document.body.querySelector("#tagDivision").innerHTML= `<button id='chosenTag' value ='high' id="valueBtn valueCloser" class="flex my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFE2DB] text-[#FF5F37] dark:bg-dark-red-background">
        <img class="w-6 h-6 my-auto" src="assets/closeTag.png" alt="">
        <p>بالا</p>
        </button>`;
    }
    document.body.querySelector("#chosenTag").addEventListener('click',()=>{
        //later close if user click again on the chosen tag
        tagRemake()
    })
}


const valueBtn = document.body.querySelectorAll("#valueBtn");
valueBtn.forEach((item)=>{
    item.addEventListener('click',takeValue);
});
const renderBtn = document.body.querySelector("#taskRender");
renderBtn.addEventListener('click',()=>{
    if(priority === ''){
        alert('میزان اهمیت تسک را وارد کنید.');
    }else{
        let message = document.body.querySelector('#taskName');
        let messageDetails = document.body.querySelector('#description');

        if(message.value ==='' || messageDetails.value === ''){
            alert('پس توضیحات؟');
        }else{
        let taskValueBackground ='' ;
        let taskPriority;
        if(priority === 'low'){
            taskValueBackground = 'bg-green';
            taskPriority = `<button value ='low' id="valueBtn valueCloser" class="flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#C3FFF1] text-[#11A483] dark:bg-dark-green-background">
            <p>پایین</p>
            </button>`
            taskBtn = `<button value ='low' id="valueBtn valueCloser" class="hidden lg:flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#C3FFF1] text-[#11A483] dark:bg-dark-green-background">
            <p>پایین</p>
            </button>`
        }else if(priority === 'medium'){
            taskValueBackground = 'bg-yellow';
            taskPriority = `<button value ='medium' id="valueBtn valueCloser" class="flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFEFD6] text-[#FFAF37] dark:bg-dark-yellow-background">
            <p>متوسط</p>
            </button>`
            taskBtn = `<button value ='medium' id="valueBtn valueCloser" class="hidden lg:flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFEFD6] text-[#FFAF37] dark:bg-dark-yellow-background">
            <p>متوسط</p>
            </button>`
        }else if(priority === 'high'){
            taskValueBackground = 'bg-red';
            taskPriority = `<button value ='high' id="valueBtn valueCloser" class="flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFE2DB] text-[#FF5F37] dark:bg-dark-red-background">
            <p>بالا</p>
            </button>`
            taskBtn = `<button value ='high' id="valueBtn valueCloser" class="hidden lg:flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFE2DB] text-[#FF5F37] dark:bg-dark-red-background">
            <p>بالا</p>
            </button>`
        }

        let newTask = document.createElement();
        // newTask.innerHTML = `
        // <div id='task' class="dark:bg-dark-second-background dark:border-dark-second-background flex flex-col mb-4 border border-neutral_7 rounded-xl w-full">
        // <div class="flex justify-between w-full">
        // <div class="flex justify-between items-center">
        // <div class="${taskValueBackground} w-1 min-h-10  my-3 rounded-l-lg"></div>
        //     <div class="flex pr-2 lg:pr-4">
        //     <input class="lg:pr-4" type="checkbox" id="checkBox" >
        //         <div class="flex">
        //           <div>
        //             <div class="flex mx-4">
        //               <p class="my-auto">
        //                 ${message.value}
        //               </p>
        //               <!-- taskBtn -->
        //               <button id='chosenTag' value ='low' id="valueBtn valueCloser" class="flex mx-3 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#C3FFF1] text-[#11A483] dark:bg-dark-green-background">
        //                 <p>پایین</p>
        //               </button>
        //               <!-- end of taskBtn -->
        //               </div>
        //               </div>
        //               </input>
        //     </div>
        // </div>
        // <button>
        // <img class="ml-6" src="./assets/taskBtn.png" alt="taskbutton">
        // </button>
        // </div>
        // <div class="self-start mr-10 -mt-auto mb-6 text-[#727272]
        //     ">${messageDetails.value}</div>
        //   </div>`;
        newTask.innerHTML = `<!-- task -->
        <div id='task' class="dark:bg-dark-second-background dark:border-dark-second-background flex flex-col mb-4 border border-neutral_7 rounded-xl w-full">
            <div class="flex justify-between w-full">
              <div class="flex justify-between items-center">
              
                <div class="${taskValueBackground} w-1 min-h-10  my-3 rounded-l-lg"></div>
                  <div class="flex pr-2 lg:pr-4">
                  <input class="lg:pr-4" type="checkbox" id="checkBox" >
                    <div class="flex">
                      <div>
                        <div class="flex mx-4">
                          <p class="my-auto">
                            ${message.value}
                          </p>
                          <!-- taskBtn -->
                          ${taskBtn}
                          <!-- end of taskBtn -->
                        </div>
            
            
                      </div>
            
                    </div>
                  </input>
                </div>
              </div>
              <div class="flex flex-col my-auto">
          <div>
            <button id="taskButtonActionsOpener">
            <img class="ml-6" src="./assets/taskBtn.png" alt="taskbutton">
            </button>
          </div>
          <div id="taskButtonActions" class="hidden relative left-6 min-w-20 p-1 rounded-lg border border-neutral_7 justify-between">
            <button id="taskDelete">
              <img class="dark:hidden" src="./assets/taskDelete.png" alt="task deleter button">
              <img class="hidden dark:inline-block" src="./assets/taskDeleteDark.png" alt="task deleter button">
            </button>
            <img src="./assets/taskEditDeleteLine.png" alt="">
            <button id="taskEdit">
              <img class="dark:hidden" src="./assets/taskEdit.png" alt="task editor button">
              <img class="hidden dark:inline-block" src="./assets/taskEditDark.png" alt="task editor button">
            </button>
          </div>
        </div>
            </div>
                <div class="self-start hidden lg:block mr-10 -mt-5 mb-6 text-[#727272]
                ">${messageDetails.value}</div>
              </div>
          <!-- end of task -->`
        document.body.querySelector('#todayTask').after(newTask);
        priority = '';
        
        addChangeEventlistener();
        addTaskCloser();
        tagRemake();
        document.body.querySelector('#taskName').value = ''
        document.body.querySelector('#description').value=''
        
        const valueBtn = document.body.querySelectorAll("#valueBtn");
        valueBtn.forEach((item)=>{
            item.addEventListener('click',takeValue);
        });
        todoTaskNumber ++

        todayTaskhandler();
        document.body.querySelector('#taskButtonActionsOpener').addEventListener('click',()=>{
            document.body.querySelector('#taskButtonActions').style.display = 'flex';    
        });
        document.body.querySelector('#taskEdit').addEventListener('click',()=>{
            alert('edit')
        })
        document.body.querySelector('#taskDelete').addEventListener('click',()=>{
            alert('delete')
        })
    }
    }
    
})
function tagRemake(){
    document.body.querySelector('#tagDivision').innerHTML= `<!-- before opening -->
    <button
    id="tags" class="border border-neutral_4 mb-6 py-1 px-2 flex rounded-md"
  >
    <img id="closedTag" class="my-auto w-4" src="./assets/tagopener.png" alt="tagopener" />
    <img id="openedTag"  class="hidden my-auto w-4" src="./assets/openedTag.png" alt="openedtag" />
    <p class="pr-1 text-base font-semibold text-neutral_6">تگ ها</p>
  </button>
    <!-- after opening -->
    <div id="tagValue" class="hidden justify-around w-7/12 px-2.5 border border-neutral_4 mb-6 py-1  rounded-md">
      <button id="valueBtn" class="lg:w-1/4 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#C3FFF1] text-[#11A483] dark:bg-dark-green-background">پایین</button>
      <img class="" src="./assets/tagLine.png" alt="line">
      <button id="valueBtn" class="lg:w-1/4 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFEFD6] text-[#FFAF37] dark:bg-dark-yellow-background">متوسط</button>
      <img class="" src="./assets/tagLine.png" alt="line">
      <button id="valueBtn" class="lg:w-1/4 my-2 py-0.5 px-2 font-semibold text-center rounded-[4px] bg-[#FFE2DB] text-[#FF5F37] dark:bg-dark-red-background">بالا</button>
    </div>`;
    const valueBtn = document.body.querySelectorAll("#valueBtn");
    valueBtn.forEach((item)=>{
        item.addEventListener('click',takeValue);
    });

    // renderBtn.classList.add("dark:bg-[#0C1B31] bg-[#5ea7f5]");
}

function todayTaskhandler(){
    // task = []
    // finishedTask = []
    // document.body.querySelectorAll('#todayTask ~ #task').forEach((item)=>{
    //     task.push(item)
    // })
    // document.body.querySelectorAll('#finished ~ #task').forEach((item)=>{
    //     finishedTask.push(item)
    // })
    // let taskNumber = task.length
    // let finishedTaskNumber = finishedTask.length
    if (todoTaskNumber>0){
        document.getElementById("todayTasksNumber").innerText = `${todoTaskNumber} تسک را باید انجام دهید.`
        document.body.querySelector('#nothingToDo').style.display = 'none';
        
    }else{
        document.getElementById("todayTasksNumber").innerText = 'تسکی برای امروز نداری!'
        document.body.querySelector('#nothingToDo').style.display = 'flex';
    }
    if(finishedTaskNumber>0){
        document.getElementById("finishedTasksNumber").innerText = `${finishedTaskNumber} تسک را باید انجام شده.`
    }else{
        document.getElementById("finishedTasksNumber").innerText = 'تسک انجام شده ای نداری!'
    }
}
let task = []
let todoTaskNumber = 0 
let finishedTask = []
let finishedTaskNumber = 0

function addChangeEventlistener(){
    let todaytasks = document.body.querySelector('#checkBox')
    todaytasks.addEventListener('change',()=>{
        let donetask = todaytasks.parentElement.parentElement.parentElement.parentElement
        donetask.classList.toggle('checked')
        //چجوری پاک میشه از اون یکی دیو؟!؟!؟!؟!؟!؟!؟!؟!؟!؟!؟!؟
        if(todaytasks.checked){
            //put it to Done Tasks
            document.body.querySelector('#finishedTasks').after(donetask);
            finishedTaskNumber++
            todoTaskNumber --
            todayTaskhandler()
        }else{
            //put it to Today Tasks
            document.body.querySelector('#todayTask').after(donetask);
            finishedTaskNumber--
            todoTaskNumber ++
            todayTaskhandler()
        }
    });
}

function darkTheme(){
    // document.getElementsByTagName('html').classList.add('dark')
    // console.log(document.getElementsByTagName('html').classList)
    document.querySelector('#html').classList.add('dark')
    document.querySelector('#html').classList.remove('light')

}
function lightTheme(){
    document.querySelector('#html').classList.remove('dark')
    document.querySelector('#html').classList.add('light')
}
document.body.querySelector('#light').addEventListener('click',lightTheme)
document.body.querySelector('#dark').addEventListener('click',darkTheme)







