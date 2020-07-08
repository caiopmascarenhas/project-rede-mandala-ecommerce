package br.com.rd.ecommerce.service;


import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Base64;

public class Criptografia {

    private static byte[] key = "?E(H+KbPeShVmYq3t6w9z$C&F)J@NcQf".getBytes();

    public  static  String engriptografar(String senha){
        String retorno = "";
        MessageDigest md;
        try{
            md = MessageDigest.getInstance("MD5");
            BigInteger hash = new BigInteger(1, md.digest(senha.getBytes()));
            retorno = hash.toString(16);
        }catch (Exception e){}
        return retorno;
    }

    public static String criptografarDado(String dado) throws Exception{
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");


        cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(key, "AES"));
        byte[] retorno =  cipher.doFinal(dado.getBytes());
        String codi = Base64.getEncoder().encodeToString(retorno);
        return codi;
    }


    public static String descriptografarDado(String dado) throws Exception{
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");


        cipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(key, "AES"));
        byte[] retorno = Base64.getDecoder().decode(dado);
        return new String(cipher.doFinal(retorno));
    }

}
