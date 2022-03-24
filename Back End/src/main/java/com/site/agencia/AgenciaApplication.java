package com.site.agencia;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.agencia.entities.Destino;
import com.site.agencia.repositorys.DestinoRepository;


@SpringBootApplication
public class AgenciaApplication implements CommandLineRunner {
	
	@Autowired
	private DestinoRepository autorRepository;
	

	public static void main(String[] args) {
		SpringApplication.run(AgenciaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		
		
	}

}
