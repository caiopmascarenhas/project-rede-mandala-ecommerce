package br.com.rd.ecommerce.base;

public class UniqueFieldException extends RuntimeException {

    public UniqueFieldException(){
        super();
    }
    public UniqueFieldException(String msg){
        super(msg);
    }

}
