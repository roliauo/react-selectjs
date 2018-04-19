# Selector


![](example/pic1.JPG)
![](example/pic2.JPG)
![](example/pic3.JPG)


## Installation

```shell
npm install roliauo/react-selectjs
```
## Importing

```js
import Selector from 'react-selectjs';
```

## Props

<ul>
 <li>title  (String)</li>
 <li>name (groupName)</li>
 <li>optionList (Array)</li>
 <li>padding (String)</li>
 <li>width (String)</li>
 <li>borderRadius (String)</li>
 <li>onClick (function)</li>
</ul>

### DefaultProps

    name: 'options'
	optionList: ['item1','item2','item3']
	title: 'Choose...'
	borderRadius: 6px
	width: 150px
	
## Usage

```js
<Selector padding='5px' borderRadius = '8px' onClick={(e)=> this.setSelectValue(e) } />
```
