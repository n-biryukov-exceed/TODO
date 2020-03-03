let List = $('#tdlApp ul');
let Mask = 'tdl_';

function showTasks(){
    // Узнаём размер хранилища
    let Storage_size = localStorage.length;
    // Если в хранилище что-то есть…
    if (Storage_size > 0){
      // то берём и добавляем это в задачи  
      for (let i = 0; i < Storage_size; i++){
        let key = localStorage.key(i);
        if(key.indexOf(Mask) == 0){
          // и делаем это элементами списка
          $('<li></li>').addClass('tdItem')
            .attr('data-itemid', key)
            .text(localStorage.getItem(key))
            .appendTo(List);
        }
      }
    }
}