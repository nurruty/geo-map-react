## Solucion de la parte teorica

En primer lugar los problemas que presenta la solucion propuesta. 

1) La escalabilidad de la aplicacion es el primer problema que tiene esta solucion, ya que si se crearan nuevas modalidades de streaming hay que refactorizar mucho codigo y es probable se ingresen errores.

2) No se respetan principios con "Single Responsibiity", ya que el RegisteredUser se encarga de calcular la cantidad de servicios a los que esta inscripto. El codigo que resuelve dicha necesidad no deberia estar dentro de la clase usuario.

## Solucion alternativa

En solucion.ts
