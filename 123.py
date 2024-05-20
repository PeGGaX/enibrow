from tkinter import * 
from tkinter import messagebox
import tkinter as tk
from tkinter import ttk

root = Tk()

root.title("Выбор пиццы")

root.geometry("500x400")

root.option_add("*tearOff", FALSE)

def info():
    messagebox.showinfo("О программе", "Программа для выбора пиццы с дополнительными опциями")

def close():
    data = messagebox.askokcancel("Выход", "Вы действительно хотите выйти?")
    if data:
        root.destroy()

def show_order():
    order_text.delete(1.0, tk.END)  # Очищаем текстовое поле
    pizza_type = pizza_var.get()
    pizza_size = size_var.get()
    toppings = [topping for topping, var in topping_vars.items() if var.get() == 1]
    
    order_text.insert(tk.END, f"Вы заказали {pizza_size} {pizza_type} пиццу с:")
    if toppings:
        order_text.insert(tk.END, "\n")
        for topping in toppings:
            order_text.insert(tk.END, f"- {topping}\n")

menu = Menu()
submenu = Menu()
submenu.add_command(label="Главное")
submenu.add_separator()
submenu.add_command(label="Выход", command=close)
menu.add_cascade(label="Меню", menu=submenu)
menu.add_cascade(label="Инфо", command=info)


# Создание фрейма для элементов управления
control_frame = ttk.Frame(root)
control_frame.grid(row=0, column=0, padx=10, pady=10)

# Выбор типа пиццы
pizza_label = ttk.Label(control_frame, text="Выберите тип пиццы:")
pizza_label.grid(row=0, column=0, sticky="w")
pizza_var = tk.StringVar()
pizza_combobox = ttk.Combobox(control_frame, textvariable=pizza_var, values=["Пепперони", "Гавайская", "Вегетарианская"])
pizza_combobox.grid(row=0, column=1, padx=5, pady=5)

# Выбор размера пиццы
size_label = ttk.Label(control_frame, text="Выберите размер пиццы:")
size_label.grid(row=1, column=0, sticky="w")
size_var = tk.StringVar()
size_combobox = ttk.Combobox(control_frame, textvariable=size_var, values=["Маленький", "Средний", "Большой"])
size_combobox.grid(row=1, column=1, padx=5, pady=5)

# Дополнительные ингредиенты
toppings_frame = ttk.LabelFrame(control_frame, text="Выберите дополнительные ингредиенты:")
toppings_frame.grid(row=2, column=0, columnspan=2, padx=5, pady=5, sticky="w")

topping_vars = {}
toppings = ["Грибы", "Оливки", "Перец", "Помидоры"]
for i, topping in enumerate(toppings):
    topping_vars[topping] = tk.IntVar()
    checkbox = ttk.Checkbutton(toppings_frame, text=topping, variable=topping_vars[topping])
    checkbox.grid(row=i//2, column=i%2, sticky="w")

# Кнопка для показа заказа
order_button = ttk.Button(control_frame, text="Показать заказ", command=show_order)
order_button.grid(row=3, column=0, columnspan=2, pady=10)



order_frame = ttk.Frame(root)
order_frame.grid(row=4, column=0, padx=10, pady=10)
order_text = Text( bg="#000")
order_text.pack(fill=BOTH, expand=1)

root.config(menu=menu)

root.mainloop()

