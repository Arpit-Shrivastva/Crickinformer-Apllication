package com.cric.app.Service;

import com.cric.app.Model.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
    //get all matches
    List<Match> getAllMatches();

    //get live matches
    List<Match> getLiveMatches();

    //get cwc2023 point table
    List<List<String>> getPointTable();
}
