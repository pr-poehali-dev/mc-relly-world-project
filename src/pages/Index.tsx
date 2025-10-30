import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDemo, setActiveDemo] = useState('text');

  const features = [
    {
      icon: 'FileText',
      title: 'Генерация текста',
      description: 'Создавайте уникальный контент для любых целей: статьи, описания, посты',
      color: 'from-primary to-secondary'
    },
    {
      icon: 'Image',
      title: 'Создание изображений',
      description: 'Генерируйте визуальный контент из текстовых описаний',
      color: 'from-secondary to-accent'
    },
    {
      icon: 'Code',
      title: 'Генерация кода',
      description: 'Автоматическое написание чистого и эффективного кода',
      color: 'from-accent to-primary'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Для знакомства с платформой',
      features: ['100 запросов/день', 'Базовые модели', 'Email поддержка', 'API доступ'],
      popular: false
    },
    {
      name: 'Pro',
      price: '2990',
      description: 'Для профессионалов',
      features: ['Безлимитные запросы', 'Все модели', 'Приоритетная поддержка', 'Расширенный API', 'Custom fine-tuning'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'По запросу',
      description: 'Для компаний',
      features: ['Выделенные ресурсы', 'SLA 99.9%', 'Персональный менеджер', 'On-premise решения', 'Кастомная интеграция'],
      popular: false
    }
  ];

  const apiExamples = {
    text: `// Генерация текста
const response = await fetch('https://api.mcrellyworld.ai/v1/generate/text', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: "Напиши статью о будущем AI",
    max_tokens: 1000,
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data.text);`,
    image: `# Генерация изображения
import requests

response = requests.post(
    'https://api.mcrellyworld.ai/v1/generate/image',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'prompt': 'Футуристический город на закате',
        'size': '1024x1024',
        'style': 'photorealistic'
    }
)

image_url = response.json()['image_url']
print(image_url)`,
    code: `// Генерация кода
curl -X POST https://api.mcrellyworld.ai/v1/generate/code \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "task": "Создай React компонент для слайдера",
    "language": "typescript",
    "framework": "react"
  }'`
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">McRellyWorld</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Возможности</a>
            <a href="#api" className="text-foreground/80 hover:text-foreground transition-colors">API</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Тарифы</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">О проекте</a>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Начать работу
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-fade-in">
            <Icon name="Cpu" size={14} className="mr-1" />
            AI-платформа нового поколения
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Генерация контента
            <br />
            <span className="gradient-text glow">на основе AI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Создавайте тексты, изображения и код с помощью передовых нейросетей. 
            Быстро, качественно, без ограничений.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Документация
            </Button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-glow-pulse" />
            <Card className="relative card-glow border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div className="animate-fade-in">
                    <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
                    <div className="text-muted-foreground">Запросов в день</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="text-4xl font-bold gradient-text mb-2">&lt;100ms</div>
                    <div className="text-muted-foreground">Отклик</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <Icon name="Zap" size={14} className="mr-1" />
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Три направления,
              <span className="gradient-text"> безграничные возможности</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощные AI-модели для создания любого контента
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-primary/20 hover:border-primary/50 transition-all hover:card-glow cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 card-glow">
            <CardHeader>
              <CardTitle className="text-2xl">Интерактивная демонстрация</CardTitle>
              <CardDescription>Попробуйте разные типы генерации в действии</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeDemo} onValueChange={setActiveDemo}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="text" className="data-[state=active]:bg-primary/20">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Текст
                  </TabsTrigger>
                  <TabsTrigger value="image" className="data-[state=active]:bg-secondary/20">
                    <Icon name="Image" size={16} className="mr-2" />
                    Изображение
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-accent/20">
                    <Icon name="Code" size={16} className="mr-2" />
                    Код
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="text" className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Промпт:</p>
                    <p className="font-medium">"Напиши короткое описание нейросети для лендинга"</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-2">Результат:</p>
                    <p className="leading-relaxed">
                      Наша нейросеть — это передовая AI-платформа, способная генерировать высококачественный контент 
                      за секунды. Используя глубокое обучение и обработку естественного языка, система понимает 
                      контекст и создает уникальные тексты, адаптированные под ваши задачи.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="image" className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Промпт:</p>
                    <p className="font-medium">"Футуристический AI-сервер в неоновом свете"</p>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20 flex items-center justify-center min-h-[200px]">
                    <div className="text-center">
                      <Icon name="Image" size={64} className="mx-auto mb-4 text-secondary/50" />
                      <p className="text-muted-foreground">Демо изображение появится здесь</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Задача:</p>
                    <p className="font-medium">"Создай функцию для валидации email на TypeScript"</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

// Использование
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email")); // false`}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="api" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              <Icon name="Terminal" size={14} className="mr-1" />
              API Документация
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Простой и
              <span className="gradient-text"> мощный API</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              RESTful API с понятной документацией и примерами кода
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Быстрый старт
                </CardTitle>
                <CardDescription>Начните работу за 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="step1">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</div>
                        Получите API ключ
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Зарегистрируйтесь на платформе и создайте API ключ в личном кабинете. 
                      Ключ доступен сразу после регистрации.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step2">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</div>
                        Установите SDK
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <code className="block bg-muted p-2 rounded text-sm">
                        npm install @mcrellyworld/ai-sdk
                      </code>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step3">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">3</div>
                        Сделайте первый запрос
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Используйте примеры кода справа для вашего первого запроса к API.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="pt-4 space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Icon name="Shield" size={18} />
                    Безопасность
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li>• HTTPS обязателен для всех запросов</li>
                    <li>• Rate limiting: 100 req/sec</li>
                    <li>• Bearer token авторизация</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Code2" size={24} />
                  Примеры кода
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="image">Image</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(apiExamples).map(([key, code]) => (
                    <TabsContent key={key} value={key}>
                      <div className="relative">
                        <pre className="p-4 bg-muted/50 rounded-lg overflow-x-auto text-xs border border-border">
                          <code>{code}</code>
                        </pre>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="absolute top-2 right-2"
                        >
                          <Icon name="Copy" size={14} />
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Icon name="DollarSign" size={14} className="mr-1" />
              Тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите
              <span className="gradient-text"> свой план</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${plan.popular ? 'border-primary card-glow scale-105' : 'border-border'} hover:border-primary/50 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      {plan.price === 'По запросу' ? (
                        <span className="text-3xl font-bold">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">₽/мес</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === 'По запросу' ? 'Связаться с нами' : 'Выбрать план'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <Icon name="Users" size={14} className="mr-1" />
              О проекте
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Миссия
              <span className="gradient-text"> McRellyWorld</span>
            </h2>
          </div>

          <Card className="border-primary/20 card-glow">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                McRellyWorld — это платформа, которая делает искусственный интеллект доступным для всех. 
                Мы верим, что AI должен помогать людям раскрывать творческий потенциал, а не заменять их.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Icon name="Target" size={20} />
                    Наша цель
                  </div>
                  <p className="text-muted-foreground">
                    Создать самую быструю и качественную платформу для генерации контента, 
                    доступную каждому пользователю.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <Icon name="Lightbulb" size={20} />
                    Наши ценности
                  </div>
                  <p className="text-muted-foreground">
                    Инновации, прозрачность, качество и фокус на пользовательском опыте 
                    лежат в основе всего, что мы делаем.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} />
                  Наши достижения
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">50K+</div>
                    <div className="text-sm text-muted-foreground">Активных пользователей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">1M+</div>
                    <div className="text-sm text-muted-foreground">Генераций в день</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">AI моделей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Поддержка</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">McRellyWorld</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-платформа для генерации контента нового поколения
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="#api" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 McRellyWorld. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
