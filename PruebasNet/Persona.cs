namespace PruebasNet
{
    public class Persona
    {
        public static int Count { get; set; }
        public string Name { get; set; }

        public Persona(){
            Count++;
        }

        public Persona(string b, int a)
        {
            
        }
        public Persona(int a,string b)
        {
            
        }
    }
}
