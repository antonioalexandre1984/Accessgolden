import { community } from "../../data";
import { contact } from "../../data";

export function Contact() {
  const { icon } = community;
  return (
    <section id='contact' className="section-portifolio bg-benefit bg-no-repeat bg-cover">
      <div className="container mx-auto px-4" >
        <div className="flex flex-col items-center text-center">
          <div
            data-aos='fade-up'
            data-aos-duration='700'
            data-aos-delay='700'
            style={{ textShadow: "0 0 10px rgba(0,0,0,2)" }}
            className="section-title-group max-w-[940px] mx-auto lg:px-0 mt-24"
          >
            <img src={icon} alt="" className="" />
            <h2 className="h1 "> Fale Conosco!
              <span className="text-[rgb(31,31,186)] shadow-2xl">.</span>
            </h2>
          </div>
          <div className="flex flex-col lg:gap-x-8 lg:flex-row lg:items-start">
            <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-12 lg:pt-2">
              {contact.map((item, i) => {
                const { icon, title, description, subtitle } = item;
                return (
                  <div
                    data-aos='fade-up'
                    data-aos-duration='700'
                    data-aos-delay='700'
                    key={i} className="flex flex-col lg:flex-row gap-x-6 items-center w-full mt-8 border-t border-gray-400 pt-4">
                    {icon}

                    <div className="">
                      <h4 className="text-xl mb-1">{title}</h4>
                      <p className="mb-1 text-primary">{subtitle || description}</p>
                      <p className="mb-1 text-primary">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <form
              data-aos='fade-up'
              data-aos-duration='700'
              data-aos-delay='700'
              className="space-y-8 max-w-[780px] mx-auto">
              <div className="flex flex-col gap-x-4 gap-y-4 lg:items-start">
                <input type="text" className="input" placeholder="Insira seu nome" />
                <input type='email' className="input" placeholder="Insira seu email" />
              </div>
              <input type='text' className="input" placeholder="Assunto" />
              <textarea className="textarea" placeholder="Digite a sua mensagem!"></textarea>
              <button className="btn btn-sm rounded-xl lg:btn-lg btn-tertiary">Enviar Messagem!</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
