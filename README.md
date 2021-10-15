# Full Stack

- Lista de características que trae Optimizely
  - Gestión de pruebas A/B:
    - Por medio de *bucketing*. Una técnica para clasificar mediante un ID suministrado al momento de llamar Optimizely, se decide la versión que se les va a mostrar a los usuarios
    - El *bucketing* es determinista. Por lo que siempre se garantiza que se obtiene los mismos resultados si se suministran los mismos datos de entrada
    - La obtención de métricas se da mediante eventos de interacciones que el usuario realiza como pueden ser: scroll, hacer click o cualquier otro evento
    - Mediante el dashboard se puede elegir que porcentaje de los visitantes ven determinada página
    - Con el dashboard se puede definir una población objetivo para decidir que población va a ver los cambios
    - Debido a que la gestión de pruebas (o experimentos en la terminología de Optimizely) exige manejar variables que se usan en diferentes ambientes
      - Un escenario común donde se debe manejar variables de ambiente es: que tengamos una característica que va a ser desplegada y en el ambiente de desarrollo tenemos una variable que define si cierta característica se muestra o no. Cuando este en producción necesitaremos esa misma variable. Con esta plataforma podremos administrar esta configuración mediante el dashboard que cuenta.
  - Se pueden mostrar las estadísticas de los resultados obtenidos en las pruebas A/B
    - En el dashboard se muestran estadísticas que se recogen mediante los eventos configurados mediante la página
    - En el desarrollo se puede configurar para enviar los datos que incluye los ID's de los usuarios a otras plataformas.
  - Ayuda a gestionar lanzamientos escalonados
    - Optimizely cuenta con varias formas de hacer lanzamientos escalonados (rollouts):
      - Se puede lanzar asignando un porcentaje de personas que recibirán cierta versión del producto
      - Se pueden seleccionar manualmente a ciertas personas para que se les muestre determinada versión del producto
        - Seleccionar manualmente a ciertas personas, es útil al momento de hacer QA. Ya que se tiene garantizado que va a estar activada cierta característica
  - Se puede desplegar como microservicio por medio de una agente
    - Para poder usarse dentro de la arquitectura de microservicios. Optimizely cuenta con ciertas características para poder usarse dentro de una arquitectura de microservicios
    - Existe cierto intercambio entre la latencia y usar este servicio como microservicio. En un despliegue como microservicio tiende a aumentar el tiempo de respuesta

# Web

- Optimizely implementa una serie de funciones dentro de su editor web para usar código a la hora de modificar el documento que modifican el comportamiento por defecto
  - A la hora de como y cuando se envía la información
    - Activar/desactivar el Optimizely
    - Gestionar eventos que disparan el envío hacia Optimizely 
    - Gestionar cookies
  - Se puede leer la información del usuario que visita la página que navega en nuestra página
    - El id del usuario que se esta usando actualmente
    - El dispositivo desde donde se conecta

