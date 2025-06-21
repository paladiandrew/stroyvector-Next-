export default function Contacts() {
  return (
    <div className="flex flex-col flex-1 bg-dark text-white">
      {/* Контент */}
      <div className="flex-grow pt-40 pb-12 px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-primary">Контакты</h1>
        
        <div className="bg-dark-gray rounded-lg py-10 px-8 inline-block mx-auto w-full max-w-4xl shadow-lg">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-bold text-primary text-xl">Телефон:</span>
              <div className="mt-2">
                <a 
                  href="tel:+79778840940" 
                  className="text-white text-xl hover:underline"
                >
                  +7 (977) 884-09-40
                </a>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="font-bold text-primary text-xl">Электронная почта:</span>
              <div className="mt-2">
                <a 
                  href="mailto:stroy-vector@yandex.ru" 
                  className="text-white text-xl hover:underline"
                >
                  stroy-vector@yandex.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}