package com.cric.app.Repository;

import com.cric.app.Model.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepository extends JpaRepository<Match, Integer> {
    Optional<Match> findByTeamHeading(String teamHeading);
}
