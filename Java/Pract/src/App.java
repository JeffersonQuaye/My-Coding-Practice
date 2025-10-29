public class App {
    public static void main(String[] args) {
        var textBox1 = new TextBox();
        //textBox1.setText("Box 1");
        System.out.println("TextBox 1 : " + textBox1.text.toUpperCase());        

        var textBox2 = new TextBox();
        textBox2.setText("Box 2");
        System.out.println("TextBox 2 : " + textBox2.text);
        
    }
    
}