# Assembly Language Demonstration

This is a teaching tool
 to demonstrate basic principles of assembly language and memory management in low level programming.

## The available registers

### storage

The storage register is designed to store values read or to be written in the memory.

### condition

The condition register is designed to store values to be used in verifying conditions.

### cursor

The cursor register is designed to store the current position of the memory cursor.

### program

The program register is designed to store the current program instruction number.


## The assembly language

### add

`add [register] [value]` will add *value* to the specified *register* value. 

### sub

`add [register] [value]` will substract *value* to the specified *register* value.

### get

`get [register]` will store the value of the specified *register* in the storage register

### set

`set [register]` will store the value of the storage register in the specified *register*

### read

`read` will store the value stored in the memory at the current cursor position in the storage register.

### write

`write` will store the value stored in the storage register in the memory at the current cursor position .

### jump

`jump [instruction_number]` will set the program register value at the specified *instruction number*.

### zjump

`zjump [value] [instruction_number]` if the condition register contains the *value*, zjump will set the program register value at the specified *instruction number*.

