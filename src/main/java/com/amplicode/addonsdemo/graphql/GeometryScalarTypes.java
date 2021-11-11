package com.amplicode.addonsdemo.graphql;

import com.amplicode.maps.utils.GeometryUtils;
import graphql.schema.Coercing;
import graphql.schema.GraphQLScalarType;
import io.leangen.graphql.util.Scalars;
import org.locationtech.jts.geom.LineString;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.Polygon;

public class GeometryScalarTypes {
    public static final GraphQLScalarType POINT_TYPE = GraphQLScalarType.newScalar()
            .name("Point")
            .description("GeoPoint Type")
            .coercing(new Coercing<Point, String>() {
                @Override
                public String serialize(Object dataFetcherResult) {
                    return ((Point) dataFetcherResult).toText();
                }

                @Override
                public Point parseValue(Object input) {
                    if (input instanceof String) {
                        return GeometryUtils.wktStringToPoint((String) input);
                    }
                    if (input instanceof Point) {
                        return (Point) input;
                    }
                    throw Scalars.valueParsingException(input, String.class, Point.class);
                }

                @Override
                public Point parseLiteral(Object input) {
                    return parseValue(input);
                }
            }).build();

    public static final GraphQLScalarType POLYLINE_TYPE = GraphQLScalarType.newScalar()
            .name("Polyline")
            .description("GeoPolyline Type")
            .coercing(new Coercing<LineString, String>() {
                @Override
                public String serialize(Object dataFetcherResult) {
                    return ((LineString) dataFetcherResult).toText();
                }

                @Override
                public LineString parseValue(Object input) {
                    if (input instanceof String) {
                        return GeometryUtils.wktStringToLineString((String) input);
                    }
                    if (input instanceof LineString) {
                        return (LineString) input;
                    }
                    throw Scalars.valueParsingException(input, String.class, LineString.class);
                }

                @Override
                public LineString parseLiteral(Object input) {
                    return parseValue(input);
                }
            }).build();

    public static final GraphQLScalarType POLYGON_TYPE = GraphQLScalarType.newScalar()
            .name("Polygon")
            .description("GeoPolygon Type")
            .coercing(new Coercing<Polygon, String>() {
                @Override
                public String serialize(Object dataFetcherResult) {
                    return ((Polygon) dataFetcherResult).toText();
                }

                @Override
                public Polygon parseValue(Object input) {
                    return GeometryUtils.wktStringToPolygon((String) input);
                }

                @Override
                public Polygon parseLiteral(Object input) {
                    return parseValue(input);
                }
            }).build();
}
