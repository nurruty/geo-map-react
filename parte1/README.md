## Solución de la parte teorica

En primer lugar los problemas que presenta la solución propuesta. 

1) La escalabilidad de la aplicación es el primer problema que tiene esta solución, ya que si se crearan nuevas modalidades de streaming hay que refactorizar mucho código y es probable se ingresen errores.

2) No se respetan principios de "Single Responsibiity", ya que el RegisteredUser se encarga de calcular la cantidad de gasto en servicios. El código que resuelve dicha necesidad no debería estar dentro de la clase usuario.

## Solucion alternativa

1) En primer lugar se delega la tarea de calcular el total al servicio. El usuario simplemente lo invoca.
2) Utilizando el patrón strategy los servicios de streaming y downloading quedan obligados a implementar el método getTotal, cada uno lo hace por el valor que le corresponde.
3) Se utiliza un repositorio que obtiene los distintos tipos de MediaContent. Un MediaContent "normal" tendrá el valor de additionalFee en 0. La clase PremiumContent hereda de MediaContent, salvo que esta si asigna un valor al additionalFee.

Se puede ver el pseudocodigo en solucion.ts
