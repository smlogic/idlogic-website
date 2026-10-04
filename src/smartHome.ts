export const smartHomeCopy = {
  pl: {
    metaTitle: 'Smart home — sceny, automatyzacje i monitoring | IDLogic',
    metaDescription: 'Zobacz przykładowy interfejs inteligentnego domu: sceny oświetlenia, klimat, rolety, ochrona przed zalaniem, powiadomienia i monitoring energii.',
    back: 'Wróć do strony głównej',
    eyebrow: 'Smart home / interfejs',
    title: 'Cały dom. Jeden spójny widok.',
    intro: 'Światło, temperatura, rolety, bezpieczeństwo i zużycie mediów w jednym miejscu. Poniżej pokazujemy przykładowe ekrany systemu Home Assistant oraz sceny dopasowane do codziennych sytuacji.',
    previewLabel: 'Przykładowy ekran główny inteligentnego domu',
    previewNote: 'Wizualizacje przykładowego interfejsu; zakres funkcji zależy od projektu i podłączonych urządzeń.',
    previewOpen: 'Otwórz cały ekran',
    jumpLabel: 'Przejdź do funkcji',
    nav: ['Demo', 'Oświetlenie', 'Klimat', 'Rolety', 'Woda', 'Alarmy', 'Energia'],
    demo: {
      eyebrow: 'Jeden dom · trzy chwile',
      title: 'Zobacz, jak dom zmienia rytm.',
      intro: 'Wybierz sytuację. Plan pokaże zmianę światła, a obok zobaczysz, jak mogą współpracować pozostałe funkcje domu.',
      label: 'Wybierz przykładowy tryb domu',
      caption: 'Przykładowa wizualizacja i opis scenariusza — nie jest to panel sterowania urządzeniami.',
      open: 'Powiększ plan domu',
      fullDemo: 'Otwórz pełne demo',
      features: ['Światło', 'Klimat', 'Rolety', 'Czujniki'],
      modes: [
        { title: 'Relaks', image: 'scene-relax.webp', alt: 'Plan domu w scenie Relaks z ciepłym oświetleniem', description: 'Wieczór w domu. Jedna scena tworzy przyjemne światło, a pozostałe ustawienia mogą dostosować się do odpoczynku.', states: ['Ciepłe i miękkie', 'Komfort na wieczór', 'Osłona prywatności', 'Monitoring aktywny'] },
        { title: 'Noc', image: 'scene-night.webp', alt: 'Plan domu w scenie Noc z dyskretnym oświetleniem', description: 'Dom wycisza się na noc. Zostają tylko delikatne punkty orientacyjne, a ważne czujniki nadal czuwają.', states: ['Dyskretna droga', 'Tryb nocny', 'Opuszczone', 'Monitoring aktywny'] },
        { title: 'Poza domem', image: 'scene-off.webp', alt: 'Plan domu po wyłączeniu oświetlenia', description: 'Wychodzisz. Światła gasną, a dom może przejść w oszczędny tryb i powiadomić o ważnych zdarzeniach.', states: ['Wyłączone', 'Tryb oszczędny', 'Opuszczone', 'Powiadomienia'] }
      ]
    },
    lighting: {
      eyebrow: 'Oświetlenie i sceny',
      title: 'Nastrój zmienia się jednym dotknięciem.',
      text: 'Automatyczne sterowanie jasnością i temperaturą barwową łączy się ze scenami, które zmieniają oświetlenie całego domu. Wybierz scenę, aby zobaczyć ją na planie.',
      viewLabel: 'Widok oświetlenia',
      scenesView: 'Sceny',
      controlsView: 'Sterowanie',
      controlsAlt: 'Przykładowy ekran ustawień automatycznego oświetlenia',
      sceneLabel: 'Wybierz scenę oświetlenia',
      scenes: [
        { title: 'Relaks', detail: 'Ciepłe światło na wieczór', image: 'scene-relax.webp', alt: 'Plan domu z oświetleniem w scenie Relaks' },
        { title: 'Sprzątanie', detail: 'Pełna jasność w pomieszczeniach', image: 'scene-cleaning.webp', alt: 'Plan domu z jasnym oświetleniem w scenie Sprzątanie' },
        { title: 'Noc', detail: 'Delikatne punkty orientacyjne', image: 'scene-night.webp', alt: 'Plan domu z dyskretnym oświetleniem w scenie Noc' },
        { title: 'Wszystko wyłączone', detail: 'Jedno polecenie dla całego domu', image: 'scene-off.webp', alt: 'Plan domu z wyłączonymi światłami' }
      ]
    },
    climatePlan: {
      label: 'Widok klimatu',
      plan: 'Plan domu',
      settings: 'Ustawienia',
      alt: 'Plan domu z temperaturą i wilgotnością w poszczególnych pomieszczeniach'
    },
    sections: [
      { id: 'climate', eyebrow: 'Komfort', title: 'Klimat w każdym pomieszczeniu.', text: 'Ustawienia temperatury, wentylacji i wilgotności mogą reagować na porę dnia i tryb domu. Na ekranie widać osobne strefy oraz parametry komfortu.', image: 'climate.webp', alt: 'Przykładowy ekran sterowania temperaturą, klimatyzacją i wentylacją' },
      { id: 'shading', eyebrow: 'Osłony', title: 'Rolety pracują razem z domem.', text: 'Sterowanie roletami i napędami pozwala ustawić zachowanie osłon dla poszczególnych pomieszczeń oraz scen związanych ze słońcem i obecnością.', image: 'shading.webp', alt: 'Przykładowy ekran automatycznego sterowania roletami' },
      { id: 'water', eyebrow: 'Ochrona i ogród', title: 'Woda pod kontrolą.', text: 'Czujniki wycieku i zawory pomagają szybko zareagować na zalanie. Projekt można również rozszerzyć o sterowanie podlewaniem ogrodu.', image: 'water.webp', alt: 'Przykładowy ekran ochrony przed wyciekiem wody i sterowania zaworami' },
      { id: 'alerts', eyebrow: 'Bezpieczeństwo', title: 'Ważne zdarzenia trafiają do Ciebie.', text: 'Powiadomienia informacyjne, ostrzeżenia i alarmy można dopasować do trybu domu. Dzięki temu wiadomo, co wymaga uwagi i kiedy.', image: 'alerts.webp', alt: 'Przykładowy ekran ustawień ostrzeżeń, alarmów i powiadomień' },
      { id: 'energy', eyebrow: 'Świadomość zużycia', title: 'Widzisz, dokąd płynie energia.', text: 'Jeden widok może pokazać zużycie prądu, gazu i wody, koszty oraz historię. Dane pomagają zrozumieć działanie domu i znaleźć możliwości oszczędzania.', image: 'energy.webp', alt: 'Przykładowy pulpit monitoringu energii elektrycznej, gazu i wody' }
    ],
    ctaTitle: 'Twój dom może działać po swojemu.',
    ctaBody: 'Każdy interfejs projektujemy wokół przestrzeni i codziennych potrzeb jej użytkowników.',
    cta: 'Porozmawiajmy o projekcie'
  },
  en: {
    metaTitle: 'Smart home — scenes, automation and monitoring | IDLogic',
    metaDescription: 'Explore a sample smart home interface for lighting scenes, climate, blinds, leak protection, alerts and energy monitoring.',
    back: 'Back to home',
    eyebrow: 'Smart home / interface',
    title: 'Your whole home. One clear view.',
    intro: 'Lighting, temperature, blinds, security and utility use in one place. Below are example Home Assistant screens and scenes designed around everyday moments.',
    previewLabel: 'Example smart home overview screen',
    previewNote: 'These are sample interface visuals; available functions depend on the project and connected devices.',
    previewOpen: 'Open the full screen',
    jumpLabel: 'Explore features',
    nav: ['Demo', 'Lighting', 'Climate', 'Blinds', 'Water', 'Alerts', 'Energy'],
    demo: {
      eyebrow: 'One home · three moments',
      title: 'See your home shift with you.',
      intro: 'Choose a moment. The floor plan shows the lighting change, while the other systems show how they could work together.',
      label: 'Choose an example home mode',
      caption: 'An illustrative scene and scenario, not a live device control panel.',
      open: 'Enlarge the home floor plan',
      fullDemo: 'Open the full demo',
      features: ['Lighting', 'Climate', 'Blinds', 'Sensors'],
      modes: [
        { title: 'Relax', image: 'scene-relax.webp', alt: 'Home floor plan in the Relax scene with warm lighting', description: 'An evening at home. One scene makes the light comfortable, while other settings can follow your evening routine.', states: ['Warm and soft', 'Evening comfort', 'Privacy shading', 'Monitoring on'] },
        { title: 'Night', image: 'scene-night.webp', alt: 'Home floor plan in the Night scene with low lighting', description: 'The home settles for the night. Just a few wayfinding lights remain, while important sensors stay alert.', states: ['Gentle wayfinding', 'Night mode', 'Lowered', 'Monitoring on'] },
        { title: 'Away', image: 'scene-off.webp', alt: 'Home floor plan with lighting switched off', description: 'You leave. The lights go out, and the home can switch to an energy saving mode and send important alerts.', states: ['Off', 'Energy saving', 'Lowered', 'Notifications'] }
      ]
    },
    lighting: {
      eyebrow: 'Lighting and scenes',
      title: 'Set the mood with one tap.',
      text: 'Automatic brightness and colour temperature work with scenes that change the lighting across the whole home. Pick a scene to see it on the floor plan.',
      viewLabel: 'Lighting views',
      scenesView: 'Scenes',
      controlsView: 'Controls',
      controlsAlt: 'Example automatic lighting settings screen',
      sceneLabel: 'Choose a lighting scene',
      scenes: [
        { title: 'Relax', detail: 'Warm light for the evening', image: 'scene-relax.webp', alt: 'Home floor plan with lighting set to the Relax scene' },
        { title: 'Cleaning', detail: 'Full brightness throughout the home', image: 'scene-cleaning.webp', alt: 'Home floor plan with bright lighting in the Cleaning scene' },
        { title: 'Night', detail: 'Gentle wayfinding lights', image: 'scene-night.webp', alt: 'Home floor plan with low lighting in the Night scene' },
        { title: 'All off', detail: 'One command for the whole home', image: 'scene-off.webp', alt: 'Home floor plan with all lights turned off' }
      ]
    },
    climatePlan: {
      label: 'Climate views',
      plan: 'Home view',
      settings: 'Settings',
      alt: 'Home floor plan showing temperature and humidity in each room'
    },
    sections: [
      { id: 'climate', eyebrow: 'Comfort', title: 'Climate in every room.', text: 'Temperature, ventilation and humidity can respond to time of day and the home’s mode. The screen shows separate zones and comfort settings.', image: 'climate.webp', alt: 'Example temperature, air conditioning and ventilation controls' },
      { id: 'shading', eyebrow: 'Shading', title: 'Blinds work with your home.', text: 'Blinds and drives can respond room by room, as well as to sunlight and occupancy scenes.', image: 'shading.webp', alt: 'Example automated blind control screen' },
      { id: 'water', eyebrow: 'Protection and garden', title: 'Keep water under control.', text: 'Leak sensors and valves help you respond quickly to a water leak. The project can also grow to include garden irrigation.', image: 'water.webp', alt: 'Example water leak protection and valve control screen' },
      { id: 'alerts', eyebrow: 'Safety', title: 'Important events reach you.', text: 'Information, warning and alarm notifications can follow the current home mode, so you know what needs attention and when.', image: 'alerts.webp', alt: 'Example warning, alarm and notification settings' },
      { id: 'energy', eyebrow: 'Energy awareness', title: 'See where resources go.', text: 'One view can bring together electricity, gas and water use, costs and history to help you understand your home and spot savings.', image: 'energy.webp', alt: 'Example electricity, gas and water monitoring dashboard' }
    ],
    ctaTitle: 'Make your home work your way.',
    ctaBody: 'Every interface is designed around the space and the people who use it.',
    cta: 'Discuss your project'
  }
} as const;
