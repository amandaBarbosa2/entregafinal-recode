package com.site.agencia.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Destino implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_destino;
	private String localidade;
	private String estado;
	
	
	
	
	
	
	public Long getId_destino() {
		return Id_destino;
	}

	public Destino() {
		super();
		
	}

	public Destino(Long id_destino, String localidade, String estado) {
		super();
		Id_destino = id_destino;
		this.localidade = localidade;
		this.estado = estado;
	}

	public void setId_destino(Long id_destino) {
		Id_destino = id_destino;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	

	@Override
	public int hashCode() {
		return Objects.hash(Id_destino);
	}

	

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(Id_destino, other.Id_destino);
	}
	
}
