# TinyDrello

- First, creating 3 sections for a UI design using bootstrap.
- adding plus button on the top of the todo Section an example todo card.
- while click the add button, new component have to display in the todo section.
- This card input data, adds the data to the state reducer.
- Added Local Storage, while save enable and disable text editing

```
const [isEdit, setIsedit] = useState(true);
function handleEditContent(id) {
    editContent(content, id);
    setIsedit(false);
  }

  function enableEdit() {
    setIsedit(false);
  }
  <textarea value={isEdit ? task.text : content}/>
```

- save the last updated time in local storage
- Dragging the components using dragOver and dragDrop uisng in the end component

## Reference

- [Change 24-hours to 12-hours](https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no)
