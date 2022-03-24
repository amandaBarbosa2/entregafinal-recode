package com.site.agencia.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agencia.entities.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}
